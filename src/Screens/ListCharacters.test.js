import React from 'react';
import ReactDOM from 'react-dom';
import ListCharacters from './ListCharacters';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListCharacters />, div);
  ReactDOM.unmountComponentAtNode(div);
});
