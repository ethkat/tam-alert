import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://use.fontawesome.com/releases/v5.0.13/css/all.css';
document.head.appendChild(link);

const req = require.context('../src/components', true, /\.stories\.js$/);

const loadStories = () =>
  req.keys().forEach(filename => req(filename));

configure(loadStories, module);
