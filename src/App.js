import React from 'react';
import styled from 'styled-components';
import HomeContainer from './containers/home/Home';
import PostsContainer from './containers/post/Post';

const PostsWrapper = styled.div`
  margin-top: 1em;
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HomeContainer />
        <PostsWrapper>
          <PostsContainer />
        </PostsWrapper>
      </div>
    );
  }
}

export default App;
