import React from 'react';
import { storiesOf } from '@storybook/react';
import gql from '../../lib/gql';
import Fake from '../../test/fake';
import PostBadge from './PostBadge';

const POST = Fake.post();

const makeStory = (post = {}) => () => (
  <PostBadge
    post={gql.filter(PostBadge.fragment, { ...POST, ...post })}
  />
);

storiesOf('PostBadge', module)
  .add('when warninig', makeStory({ trustCount: 55 }))
  .add('when info', makeStory({ trustCount: 10 }));
