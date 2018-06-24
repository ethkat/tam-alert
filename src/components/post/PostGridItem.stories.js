import React from 'react';
import gql from 'lib/gql';
import Fake from '@/test/fake';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import PostGridItem from './PostGridItem';

const POST = Fake.post();

const makeStory = (post = {}) => () => (
  <PostGridItem
    up={action('up')}
    down={action('down')}
    post={gql.filter(PostGridItem.fragment, { ...POST, ...post })}
  />
);

const stories = storiesOf('PostGridItem', module);

const TYPES = ['success', 'info', 'warning', 'danger'];

TYPES.forEach((type) => {
  stories.add(`with type ${type}`, makeStory({ type }));
});
