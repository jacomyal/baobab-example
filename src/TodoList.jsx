import React from 'react';
import { root } from 'baobab-react/mixins';

import Form from './Form.jsx';
import List from './List.jsx';

export default React.createClass({
  mixins: [ root ],

  render() {
    return (
      <div>
        <Form />
        <List />
      </div>
    );
  }
});

