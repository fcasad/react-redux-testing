import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './TodoList';

describe('<TodoList />', () => {
  const selectors = {
    parentDiv: 'div#todo-list',
    header: 'div > h1',
    input: 'div > input',
    list: 'div > ul',
    listItems: 'div > ul > li',
    button: 'div > button',
  };

  const mockEvents = {
    changeInput: { target: { value: 'new todo' } },
  };

  it('renders correct markup', () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find(selectors.parentDiv).exists()).toBe(true);
    expect(wrapper.find(selectors.header).exists()).toBe(true);
    expect(wrapper.find(selectors.header).text()).toBe('Todo List');
    expect(wrapper.find(selectors.input).exists()).toBe(true);
    expect(wrapper.find(selectors.list).exists()).toBe(true);
    expect(wrapper.find(selectors.button).exists()).toBe(true);
    expect(wrapper.find(selectors.button).text()).toBe('Add Todo');
  });

  it('updates input text', () => {
    const wrapper = shallow(<TodoList />);
    const input = wrapper.find(selectors.input);
    expect(input.props().value).toBe('');
    input.simulate('change', mockEvents.changeInput);
    const updatedInput = wrapper.find(selectors.input);
    expect(updatedInput.props().value).toBe('new todo');
  });

  it('calls props.onAddClick correctly', () => {
    const spy = jest.fn();
    const wrapper = shallow(<TodoList onAddClick={spy} />);
    const button = wrapper.find(selectors.button);
    button.simulate('click');
    expect(spy).toHaveBeenCalledWith('');
  });

  it('calls props.onDeleteClick correctly', () => {
    const spy = jest.fn();
    const todos = [{ id: '123', text: 'delete me' }];
    const wrapper = shallow(<TodoList todos={todos} onDeleteClick={spy} />);
    const listItem = wrapper.find(selectors.listItems).first();
    listItem.simulate('click');
    expect(spy).toHaveBeenCalledWith('123');
  });
});
