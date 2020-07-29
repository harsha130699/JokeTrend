import React from 'react';
import ReactDOM from 'react-dom';
import ViewJokes from './ViewJokes';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewJokes />, div);
  ReactDOM.unmountComponentAtNode(div);
});