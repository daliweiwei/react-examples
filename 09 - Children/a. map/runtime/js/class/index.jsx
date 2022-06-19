/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return <i>Hello {this.props.name}</i>;
  }
}

class List extends React.Component {
  render() {
    return (
      <ul>
        {React.Children.map(this.props.children, (child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ul>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <List>
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" />
  </List>
);
