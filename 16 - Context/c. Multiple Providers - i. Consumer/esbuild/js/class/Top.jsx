/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import ColorContext from './ColorContext.jsx';
import Middle from './Middle.jsx';
import Bottom from './Bottom.jsx';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };

    this.handleSwitch = this.handleSwitch.bind(this);
  }
  handleSwitch() {
    this.setState(state => ({
      color: state.color === 'red' ? 'green' : 'red'
    }));
  }
  render() {
    return (
      <>
        <ColorContext.Provider value={{ color: 'blue' }}>
          <ColorContext.Provider value={{ color: this.state.color }}>
            <Middle />
            <button onClick={this.handleSwitch}>Switch color</button>
          </ColorContext.Provider>

          <Bottom />
        </ColorContext.Provider>

        <Bottom />
      </>
    );
  }
}

export default Top;
