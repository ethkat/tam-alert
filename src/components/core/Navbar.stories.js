import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Navbar from './Navbar';


storiesOf('Navbar', module)
  .add('default', () => (
    <Navbar
      submitPost={action('submitPost')}
    />
  ));
