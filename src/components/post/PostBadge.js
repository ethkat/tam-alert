import React from 'react';
import gql from 'graphql-tag';
import { Badge } from 'reactstrap';
import { propType } from 'graphql-anywhere';


const fragment = gql`
  fragment PostBadge on Post {
    trustCount
  }
`;

const PostBadge = ({ post }) => (
  <Badge pill color={post.trustCount > 50 ? 'danger' : 'info'}>
    {post.trustCount}
  </Badge>
);

PostBadge.fragment = fragment;

PostBadge.propTypes = {
  post: propType(fragment).isRequired,
};

export default PostBadge;
