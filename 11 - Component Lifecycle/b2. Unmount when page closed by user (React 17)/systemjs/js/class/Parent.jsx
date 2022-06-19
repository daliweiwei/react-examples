/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import React from 'react';

import Child from './Child';

export default class Parent extends React.Component {
  componentWillUnmount() {
    console.log('-- unmount Parent --');
  }
  render() {
    return (
      <React.Fragment>
        <h1>Parent</h1>
        <Child />
      </React.Fragment>
    );
  }
}
