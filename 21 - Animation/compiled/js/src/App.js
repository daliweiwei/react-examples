/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [0, 1, 2],
      lastId: 2
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    let newLastId = this.state.lastId + 1;
    this.setState(state => ({
      items: [...state.items, newLastId],
      lastId: newLastId
    }));
  }

  handleRemove(key) {
    let items = this.state.items;
    let keyIndex = items.indexOf(+key);
    if (keyIndex !== -1) {
      items.splice(keyIndex, 1);
      this.setState({ items });
    }
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleAdd}>Add</button>
        <hr />
        <TransitionGroup>
          {this.state.items.map(key => {
            return (
              <CSSTransition
                key={key}
                classNames="item"
                timeout={{ enter: 500, exit: 500 }}
                unmountOnExit
              >
                <div
                  onClick={this.handleRemove.bind(null, key)}
                  onKeyUp={this.handleRemove.bind(null, key)}
                  className="item"
                  role="button"
                  tabIndex="0"
                >
                  {key}
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

export default App;
