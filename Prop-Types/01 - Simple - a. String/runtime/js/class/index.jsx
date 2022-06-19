/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM, PropTypes */

class Greeting extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting name="World" />);
