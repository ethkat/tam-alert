import _ from 'lodash';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import gql from '../../lib/gql';
import Fake from '../../test/fake';
import Posts from './Posts';

const POSTS = _.times(30, () => (
  Fake.post({
    type: _.sample(['success', 'info', 'warning', 'danger']),
  })
));

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listType: 'list',
    };
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(listType) {
    this.setState({ listType }, () => action('changeFilter'));
  }

  render() {
    const { listType } = this.state;

    return (
      <Posts
        up={action('up')}
        down={action('down')}
        posts={POSTS.map(post => (
          gql.filter(Posts.fragment, post)
        ))}
        listType={listType}
        changeFilter={this.changeFilter}
      />
    );
  }
}

storiesOf('Posts', module)
  .add('default', () => <Story />);
