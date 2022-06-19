/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global React, ReactDOM */

class Bottom extends React.Component {
  render() {
    return <h1 style={{ color: this.props.color }}>Bottom</h1>;
  }
}

class Middle extends React.Component {
  render() {
    return <Bottom color={this.props.color} />;
  }
}

class Top extends React.Component {
  render() {
    return <Middle color={this.props.color} />;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Top color="red" />);
