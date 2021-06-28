import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Greeting from './Greeting';

configure({ adapter: new Adapter() });

/// Enzyme ///

describe('Greeting', () => {
  it('renders hello world snapshot', () => {
    const component = shallow(<Greeting />);
    let tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
