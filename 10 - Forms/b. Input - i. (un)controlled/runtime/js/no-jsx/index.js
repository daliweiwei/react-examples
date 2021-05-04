/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

class HelloMessage extends React.Component {
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
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        /* Not controlled by React */
        React.createElement('span', null, 'Not controlled by React:'),
        React.createElement('input', {
          autoFocus: true,
          onChange: this.handleChange,
          defaultValue: this.state.name
        })
      ),

      React.createElement(
        'div',
        null,
        /* Controlled by React */
        React.createElement('span', null, 'Controlled by React:'),
        React.createElement('input', {
          onChange: this.handleChange,
          value: this.state.name
        })
      ),

      React.createElement(
        'div',
        { style: { color: 'darkgray' } },
        'State = ',
        this.state.name
      )
    );
  }
}

ReactDOM.render(
  React.createElement(HelloMessage),
  document.getElementById('app')
);
