import state from './state.js';

export default {
  setMessage(message) {
    state.set('message', message);
  },

  addTask(message) {
    const id = '' + state.set('_id', state.get('_id') + 1);
    state.select('tasks')
         .push({ id, message });
    state.set('message', '');
  },

  removeTask(id) {
    state.select('tasks')
         .unset({ id });
  }
};
