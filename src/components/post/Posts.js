import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import { Container, Row, Col } from 'reactstrap';
import PostsGrid from './PostsGrid';
import PostsList from './PostsList';
import PostFilter from './PostFilter';

const fragment = gql`
  fragment PostsPost on Post {
    ...PostListPost
    ...PostsGridPost
  }
  ${PostsGrid.fragment}
  ${PostsList.fragment}
`;

const FiltersColumn = styled(Col)`
  display: flex;
  margin-top: 1em;
  align-items: center;
  margin-bottom: 2em;
  flex-direction: column;
`;

const Posts = ({
  up,
  down,
  posts,
  listType,
  changeFilter,
}) => (
  <Container>
    <Row>
      <FiltersColumn>
        <PostFilter
          click={changeFilter}
          listType={listType}
        />
      </FiltersColumn>
    </Row>
    <Row>
      {
        listType === 'list' &&
        <PostsList
          up={up}
          down={down}
          posts={posts}
        />
      }
      {
        listType === 'grid' &&
        <PostsGrid
          up={up}
          down={down}
          posts={posts}
        />
      }
    </Row>
  </Container>
);

Posts.fragment = fragment;

Posts.defaultProps = {
  posts: [],
  listType: 'list',
};

Posts.propTypes = {
  up: PropTypes.func.isRequired,
  down: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(propType(fragment)),
  listType: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

export default Posts;
