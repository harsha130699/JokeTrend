import React from 'react';
import ReactDOM from 'react-dom';
import AddJokes from './AddJokes';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddJokes />, div);
  ReactDOM.unmountComponentAtNode(div);
});