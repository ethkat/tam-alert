import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import PostBadge from './PostBadge';
import PostActions from './PostActions';
import { getTimePosted } from '../../helpers/date';

const fragment = gql`
  fragment PostListItemPost on Post {
    _id
    type
    title
    createdAt
    description
    ...PostBadge
    ...PostActions
  }
  ${PostBadge.fragment}
  ${PostActions.fragment}
`;

const StyledItem = styled(ListGroupItem)`
  margin-bottom: 1em
`;

const PostListItem = ({ up, down, post }) => (
  <StyledItem>
    <ListGroupItemHeading className="justify-content-between">
      {post.title}
      {' '}
      <span className="text-muted">{getTimePosted(post.createdAt)}</span>
      {' '}
      <PostBadge post={post} />
    </ListGroupItemHeading>
    <ListGroupItemText>
      {post.description}
    </ListGroupItemText>
    <PostActions
      up={() => up(post._id)}
      down={() => down(post._id)}
      post={post}
    />
  </StyledItem>
);

PostListItem.fragment = fragment;

PostListItem.propTypes = {
  up: PropTypes.func.isRequired,
  down: PropTypes.func.isRequired,
  post: propType(fragment).isRequired,
};

export default PostListItem;
