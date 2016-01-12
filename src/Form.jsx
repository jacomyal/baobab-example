import React from 'react';
import { branch } from 'baobab-react/mixins';
import actions from './actions.js';

export default React.createClass({
  mixins: [ branch ],
  cursors: { message: [ 'message' ] },

  handleSubmit(e) {
    e.preventDefault();
    actions.addTask(e.target.message.value);
  },
  handleChange(e) {
    actions.setMessage(e.target.value);
  },

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text"
               name="message"
               onChange={ this.handleChange }
               value={ this.state.message } />
        <button type="submit">Submit</button>
      </form>
    );
  }
});
