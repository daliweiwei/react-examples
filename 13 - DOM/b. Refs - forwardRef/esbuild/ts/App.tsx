/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useLayoutEffect, useRef } from 'react';

import Greeting from './Greeting.tsx';

function App() {
  const myGreeting = useRef();

  useLayoutEffect(() => {
    // myH1.current contains a reference to the real DOM node.
    myGreeting.current.innerHTML = 'Hello <u>React</u>!!!';
  });

  return <Greeting name="World" ref={myGreeting} />;
}

export default App;
