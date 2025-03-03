/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createElement, Fragment } from 'react';

class HelloMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    // Bind all non-react methods to this.
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return createElement(
      Fragment,
      null,
      createElement(
        'div',
        null,
        /* Not controlled by React */
        createElement('span', null, 'Not controlled by React:'),
        createElement('input', {
          autoFocus: true,
          onChange: this.handleChange,
          defaultValue: this.state.name
        })
      ),

      createElement(
        'div',
        null,
        /* Controlled by React */
        createElement('span', null, 'Controlled by React:'),
        createElement('input', {
          onChange: this.handleChange,
          value: this.state.name
        })
      ),

      createElement(
        'div',
        { style: { color: 'darkgray' } },
        'State = ',
        this.state.name
      )
    );
  }
}

export default HelloMessage;
