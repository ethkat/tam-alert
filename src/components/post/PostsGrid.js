import React from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import { CardColumns } from 'reactstrap';
import PostGridItem from './PostGridItem';

const fragment = gql`
  fragment PostsGridPost on Post {
    _id
    ...PostGridItemPost
  }
  ${PostGridItem.fragment}
`;

const PostsGrid = ({ up, down, posts }) => (
  <CardColumns>
    {
      posts.map(post => (
        <PostGridItem
          up={up}
          key={post._id}
          down={down}
          post={post}
        />
      ))
    }
  </CardColumns>
);

PostsGrid.fragment = fragment;

PostsGrid.defaultProps = {
  posts: [],
};

PostsGrid.propTypes = {
  up: PropTypes.func.isRequired,
  down: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(propType(fragment)),
};

export default PostsGrid;
