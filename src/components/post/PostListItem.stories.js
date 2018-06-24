import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import gql from '../../lib/gql';
import Fake from '../../test/fake';
import PostListItem from './PostListItem';

const POST = Fake.post();

const makeStory = (post = {}) => () => (
  <PostListItem
    up={action('up')}
    down={action('down')}
    post={gql.filter(PostListItem.fragment, { ...POST, ...post })}
  />
);

const stories = storiesOf('PostListItem', module);

stories.add('with small text', makeStory({
  type: 'success',
  title: 'Small title',
  description: 'very short',
}));

const TYPES = ['success', 'info', 'warning', 'danger'];

TYPES.forEach((type) => {
  stories.add(`with type ${type}`, makeStory({ type }));
});
