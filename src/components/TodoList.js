import React, { Component } from 'react';

const noop = () => {};

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  makeDeleteClickHandler(id) {
    return () => this.props.onDeleteClick(id);
  }

  handleAddClick() {
    this.props.onAddClick(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div id="todo-list">
        <h1>Todo List</h1>
        <input value={this.state.text} onChange={this.handleChange} />
        <ul>
          {this.props.todos.map(({ id, text }) => (
            <li key={id} onClick={this.makeDeleteClickHandler(id)}>
              {text}
            </li>
          ))}
        </ul>
        <button onClick={this.handleAddClick}>Add Todo</button>
      </div>
    );
  }
}

TodoList.defaultProps = {
  todos: [],
  onAddClick: noop,
  onDeleteClick: noop,
};

export default TodoList;
