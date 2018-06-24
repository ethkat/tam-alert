import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import PostFilter from './PostFilter';

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listType: 'list',
    };

    this.click = this.click.bind(this);
  }

  click(listType) {
    this.setState({ listType }, () => action('click'));
  }

  render() {
    const { listType } = this.state;
    return (
      <PostFilter
        click={this.click}
        listType={listType}
      />
    );
  }
}

storiesOf('PostFilter', module)
  .add('when ', () => <Story />);
