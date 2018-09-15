import reducer, { actionTypes, actionCreators, selectors } from './todos';

describe('actionCreators', () => {
  it('addTodo returns correct action', () => {
    const action = actionCreators.addTodo('test');
    expect(action.type).toBe(actionTypes.ADD_TODO);
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.text).toBe('test');
  });

  it('deleteTodo returns correct action', () => {
    const action = actionCreators.deleteTodo('123');
    expect(action.type).toBe(actionTypes.DELETE_TODO);
    expect(action.payload).toBe('123');
  });
});

describe('reducer', () => {
  it('handles default', () => {
    const state = reducer(undefined, { type: 'unknown' });
    expect(state).toEqual([]);
  });

  it('handles ADD_TODO', () => {
    const action = actionCreators.addTodo('test');
    const newTodo = action.payload;
    const state = reducer(undefined, action);
    expect(state).toEqual([newTodo]);
  });

  it('handles DELETE_TODO', () => {
    const actions = [
      actionCreators.addTodo('test', '123'),
      actionCreators.deleteTodo('123'),
    ];
    const state = actions.reduce(reducer, undefined);
    expect(state).toEqual([]);
  });
});

describe('selectors', () => {
  it('getTodos returns todos', () => {
    const todo = { id: '123', text: 'test' };
    const state = { todos: [todo] };
    expect(selectors.getTodos(state.todos)).toEqual([todo]);
  });
});
