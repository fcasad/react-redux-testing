import { createStore, combineReducers } from 'redux';

import todos from './todos';

export const rootReducer = combineReducers({ todos });

const configureStore = () => createStore(rootReducer);

export default configureStore;
