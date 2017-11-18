// @flow
import * as React from 'react';

import Menu from './views/Menu';
import Page from './views/Page';
import Character from './Character';
import type { CharacterType } from './Character';

type State = {
  pageNumber: number,
  Character: Character,
};

export default class extends React.Component<{}, State> {
  state = { pageNumber: 0, Character: new Character() };

  handleNewClick = () => {
    console.log('handleNewClick');
    this.setState({ pageNumber: 1 });
  };

  handleContinueClick = () => {
    console.log('handleContinueClick');
  };

  handleAboutClick = () => {
    console.log('handleAboutClick');
  };

  render() {
    return this.state.pageNumber ? (
      <Page />
    ) : (
      <Menu
        onNewClick={this.handleNewClick}
        onContinueClick={this.handleContinueClick}
        onAboutClick={this.handleAboutClick}
      />
    );
  }
}
