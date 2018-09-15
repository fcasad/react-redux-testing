import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './TodoList';
import configureStore from '../store';

describe('connected <TodoList />', () => {
  const store = configureStore();

  it('passes correct props', () => {
    const wrapper = shallow(<TodoList />, { context: { store } });
    expect(wrapper.props()).toHaveProperty('todos');
    expect(wrapper.props()).toHaveProperty('onAddClick');
    expect(wrapper.props()).toHaveProperty('onDeleteClick');
  });
});
