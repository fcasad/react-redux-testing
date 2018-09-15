import { unmountComponentAtNode } from 'react-dom';

import renderApp from './renderApp';

describe('renderApp', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    renderApp(div);
    unmountComponentAtNode(div);
  });
});
