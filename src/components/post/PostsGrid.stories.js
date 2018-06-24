import _ from 'lodash';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import gql from '../../lib/gql';
import Fake from '../../test/fake';
import PostsGrid from './PostsGrid';

const POSTS = _.times(30, () => (
  Fake.post({
    type: _.sample(['success', 'info', 'warning', 'danger']),
  })
));

storiesOf('PostsGrid', module)
  .add('default', () => (
    <PostsGrid
      up={action('up')}
      down={action('down')}
      posts={POSTS.map(post => gql.filter(PostsGrid.fragment, post))}
    />
  ));
