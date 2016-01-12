import React from 'react';
import ReactDOM from 'react-dom';

import state from './state.js';
import TodoList from './TodoList.jsx';

ReactDOM.render(
  <TodoList tree={ state } />,
  document.getElementById('todolist')
);

export default {
  state
};
