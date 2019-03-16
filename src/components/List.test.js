import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import store from '../STORE';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List props={store.lists} />, div);
  ReactDOM.unmountComponentAtNode(div);
});