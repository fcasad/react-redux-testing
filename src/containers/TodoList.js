import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import { selectors, actionCreators } from '../store/todos';

const mapStateToProps = state => ({
  todos: selectors.getTodos(state.todos),
});

const mapDispatchToProps = {
  onDeleteClick: actionCreators.deleteTodo,
  onAddClick: actionCreators.addTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
