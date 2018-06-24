import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up';
import { propType } from 'graphql-anywhere';
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down';
import { Button, ButtonGroup } from 'reactstrap';

const fragment = gql`
  fragment PostActions on Post {
    type
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const PostActions = ({ up, down, post }) => (
  <Container>
    <ButtonGroup>
      <Button onClick={up} color={post.type}>
        <FaThumbsUp />
        {' '}
        Verdad
      </Button>
      <Button onClick={down} color={post.type}>
        <FaThumbsDown />
        {' '}
        Mentira
      </Button>
    </ButtonGroup>
  </Container>
);

PostActions.fragment = fragment;

PostActions.propTypes = {
  up: PropTypes.func.isRequired,
  down: PropTypes.func.isRequired,
  post: propType(fragment).isRequired,
};

export default PostActions;
