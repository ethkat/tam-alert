import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import gql from '../../lib/gql';
import Fake from '../../test/fake';
import PostActions from './PostActions';

const POST = Fake.post();

const makeStory = (post = {}) => () => (
  <PostActions
    up={action('up')}
    down={action('down')}
    post={gql.filter(PostActions.fragment, { ...POST, ...post })}
  />
);

const stories = storiesOf('PostActions', module);

const TYPES = ['success', 'info', 'warning', 'danger'];

TYPES.forEach((type) => {
  stories.add(`with type ${type}`, makeStory({ type }));
});
