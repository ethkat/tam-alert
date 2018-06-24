import React from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import { ListGroup } from 'reactstrap';
import PostListItem from './PostListItem';

const fragment = gql`
  fragment PostListPost on Post {
    _id
    ...PostListItemPost
  }
  ${PostListItem.fragment}
`;

const PostsList = ({ up, down, posts }) => (
  <ListGroup>
    {
      posts.map(post => (
        <PostListItem
          up={up}
          key={post._id}
          down={down}
          post={post}
        />
      ))
    }
  </ListGroup>
);

PostsList.fragment = fragment;

PostsList.defaultProps = {
  posts: [],
};

PostsList.propTypes = {
  up: PropTypes.func.isRequired,
  down: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(propType(fragment)),
};

export default PostsList;
