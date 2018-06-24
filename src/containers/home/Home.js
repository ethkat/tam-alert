import React from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import Navbar from '../../components/core/Navbar';
import { PostsQuery } from '../post/Post';

const CreatePostMutation = gql`
  mutation ($post: PostInput!) {
    insertPost(post: $post)
  }
`;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.submitPost = this.submitPost.bind(this);
  }

  submitPost(post, cb) {
    const { mutate } = this.props;

    if (!post.type) {
      Object.assign(post, {
        type: 'success',
      });
    }
    mutate({
      variables: { post },
      refetchQueries: [{
        query: PostsQuery,
        variables: { limit: 10 },
      }],
    })
      .then(() => cb());
  }

  render() {
    return (
      <div>
        <Navbar submitPost={this.submitPost} />
      </div>
    );
  }
}

Home.propTypes = {
  mutate: PropTypes.func.isRequired,
};

export default graphql(CreatePostMutation)(Home);
