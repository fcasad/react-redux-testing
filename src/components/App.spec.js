import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import TodoList from '../containers/TodoList';

describe('<App />', () => {
  it('renders correct markup', () => {
    const wrapper = shallow(<App />);
    const parentDiv = wrapper.find('div#app-wrapper');
    expect(parentDiv.exists()).toBe(true);
  });

  it('renders child Components', () => {
    const wrapper = shallow(<App />);
    const todoList = wrapper.find(TodoList);
    expect(todoList.exists()).toBe(true);
  });
});
