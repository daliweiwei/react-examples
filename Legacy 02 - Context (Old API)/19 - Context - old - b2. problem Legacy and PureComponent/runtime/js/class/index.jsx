/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM, PropTypes */

class Three extends React.PureComponent {
  render() {
    return <h1 style={{ color: this.context.color }}>Three</h1>;
  }
}
Three.contextTypes = {
  color: PropTypes.string
};

class Two extends React.PureComponent {
  render() {
    return <Three />;
  }
}

class One extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };

    this.handleSwitch = this.handleSwitch.bind(this);
  }
  getChildContext() {
    return { color: this.state.color };
  }
  handleSwitch() {
    this.setState(state => ({
      color: state.color === 'red' ? 'green' : 'red'
    }));
  }
  render() {
    return (
      <React.Fragment>
        <Two />
        <button onClick={this.handleSwitch}>Switch color</button>
      </React.Fragment>
    );
  }
}
One.childContextTypes = {
  color: PropTypes.string
};

ReactDOM.render(<One color="red" />, document.getElementById('root'));
