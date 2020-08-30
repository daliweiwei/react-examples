/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk     !*/

import React from 'react';

interface IGreetingProps {
  greeting: string;
  name: string;
}

const Greeting: React.FC<IGreetingProps> = props => (
  <h1>
    {props.greeting} {props.name}!
  </h1>
);

export default Greeting;
