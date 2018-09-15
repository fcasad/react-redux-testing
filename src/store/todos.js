import { v4 as uuid } from 'uuid';

export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
};

export const actionCreators = {
  addTodo: (text, id = uuid()) => ({
    type: actionTypes.ADD_TODO,
    payload: { id, text },
  }),
  deleteTodo: id => ({
    type: actionTypes.DELETE_TODO,
    payload: id,
  }),
};

export const selectors = {
  getTodos: state => state,
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, action.payload];
    case actionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
