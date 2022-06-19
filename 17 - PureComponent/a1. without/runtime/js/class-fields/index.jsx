/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off", no-console:"off" */

class Child extends React.Component {
  render() {
    console.log('Render Child');
    return <h2>Child</h2>;
  }
}

class Parent extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-instance_class_fields
  state = { name: '' };
  nameChanged = e => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Parent</h1>
        <div style={{ color: 'darkgray' }}>
          Open the console and observe the number of Child renders when typing.
        </div>
        <div>
          <input
            autoFocus
            onChange={this.nameChanged}
            value={this.state.name}
          />
        </div>
        <Child />
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent />);
