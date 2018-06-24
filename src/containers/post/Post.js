import React from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import { compose, graphql } from 'react-apollo';
import Posts from '../../components/post/Posts';

export const PostsQuery = gql`
  query ($limit: Int!) {
    getPosts(limit: $limit) {
      _id
      type
      title
      createdAt
      trustCount
      description
    }
  }
`;

const UpdatePostTrustMutation = gql`
  mutation ($data: PostInputTrust!) {
    updatePostTrust(data: $data)
  }
`;

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listType: 'list',
    };

    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.reputationCall = this.reputationCall.bind(this);
  }

  up(_id) {
    this.reputationCall({ _id, type: 'up' });
  }

  down(_id) {
    this.reputationCall({ _id, type: 'down' });
  }

  reputationCall(data) {
    const { mutate } = this.props;
    mutate({
      variables: { data },
      refetchQueries: [{
        query: PostsQuery,
        variables: {
          limit: 15,
        },
      }],
    });
  }

  changeFilter(listType) {
    this.setState({ listType });
  }

  render() {
    const { posts, loadingPosts } = this.props;
    const { listType } = this.state;

    if (loadingPosts) {
      return (
        <div>Cargando Posts...</div>
      );
    }
    return (
      <Posts
        up={this.up}
        down={this.down}
        posts={posts}
        listType={listType}
        changeFilter={this.changeFilter}
      />
    );
  }
}

Post.defaultProps = {
  posts: [],
  loadingPosts: true,
};

Post.propTypes = {
  posts: PropTypes.arrayOf(propType(Posts.fragment)),
  mutate: PropTypes.func.isRequired,
  loadingPosts: PropTypes.bool,
};

export default compose(
  graphql(UpdatePostTrustMutation),
  graphql(PostsQuery, {
    props: ({ data: { loading: loadingPosts, getPosts: posts } }) => ({
      posts,
      loadingPosts,
    }),
    options: () => ({
      variables: { limit: 10 },
    }),
  }),
)(Post);
