import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import CreatePostModal from './CreatePostModal';

storiesOf('CreatePostModal', module)
  .add('default', () => (
    <CreatePostModal
      close={action('close')}
      submit={action('submit')}
      isOpen
    />
  ));
