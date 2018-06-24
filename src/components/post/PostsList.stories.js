import _ from 'lodash';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import gql from '../../lib/gql';
import Fake from '../../test/fake';
import PostsList from './PostsList';

const POSTS = _.times(30, () => (
  Fake.post({
    type: _.sample(['success', 'info', 'warning', 'danger']),
  })
));

storiesOf('PostsList', module)
  .add('default', () => (
    <PostsList
      up={action('up')}
      down={action('down')}
      posts={POSTS.map(post => gql.filter(PostsList.fragment, post))}
    />
  ));
