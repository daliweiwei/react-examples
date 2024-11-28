/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import Greeting from '../src/Greeting.jsx';

import React from 'react';
import ShallowRenderer from 'react-shallow-renderer';
import expect from 'expect';

describe('Greeting', () => {
  it('should render Hello World in a H1', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Greeting />);
    const actual = renderer.getRenderOutput();

    expect(actual.type).toBe('h1');
    expect(actual.props.children).toEqual('Hello World!');
  });
});
