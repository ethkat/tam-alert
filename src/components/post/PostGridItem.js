import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import PostBadge from './PostBadge';
import PostActions from './PostActions';
import { getTimePosted } from '../../helpers/date';

const fragment = gql`
  fragment PostGridItemPost on Post {
    _id
    type
    title
    image
    createdAt
    description
    ...PostBadge
    ...PostActions
  }
  ${PostBadge.fragment}
  ${PostActions.fragment}
`;

const PostGridItem = ({ up, down, post }) => (
  <Card outline color={post.type}>
    <CardBody>
      <CardTitle>{post.title} <PostBadge post={post} /></CardTitle>
      <CardSubtitle className="text-muted">{getTimePosted(post.createdAt)}</CardSubtitle>
      <CardText>
        {post.description}
      </CardText>
      <PostActions
        up={() => up(post._id)}
        down={() => down(post._id)}
        post={post}
      />
    </CardBody>
  </Card>
);

PostGridItem.fragment = fragment;

PostGridItem.propTypes = {
  up: PropTypes.func.isRequired,
  down: PropTypes.func.isRequired,
  post: propType(fragment).isRequired,
};

export default PostGridItem;
