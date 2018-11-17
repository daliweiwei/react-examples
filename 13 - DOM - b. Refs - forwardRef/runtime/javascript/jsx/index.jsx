/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

const Greeting = React.forwardRef(function(props, ref) {
  return (
    <div className="hello">
      <h1 ref={ref}>Hello {props.name}!</h1>
    </div>
  );
});

function App() {
  const myGreeting = React.useRef(null);

  React.useLayoutEffect(() => {
    // myH1.current contains a reference to the real DOM node.
    myGreeting.current.innerHTML = 'Hello <i>React</i>!!!';
  });

  return <Greeting name="World" ref={myGreeting} />;
}

ReactDOM.render(<App />, document.getElementById('app'));
