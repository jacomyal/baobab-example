import React from 'react';
import { branch } from 'baobab-react/mixins';
import actions from './actions.js';

export default React.createClass({
  mixins: [ branch ],
  cursors: { tasks: [ 'tasks' ] },

  handleClick(e) {
    actions.removeTask(e.target.getAttribute('data-id'));
  },

  render() {
    return (
      <ul>{
        (this.state.tasks || []).map(task => (
          <li key={ task.id }
              data-id={ task.id }
              onClick={ this.handleClick }>{
            task.message
          }</li>
        ))
      }</ul>
    );
  }
});
