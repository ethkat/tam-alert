import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import CreatePostForm from './CreatePostForm';

const makeStory = () => () => (
  <CreatePostForm
    submit={action('submit')}
  />
);

storiesOf('CreatePostForm', module)
  .add('default', makeStory());
