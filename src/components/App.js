import React, { Component } from 'react';

import TodoList from '../containers/TodoList';

export default class App extends Component {
  render() {
    return (
      <div id="app-wrapper">
        <TodoList />
      </div>
    );
  }
}
