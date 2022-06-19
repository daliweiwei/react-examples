/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

const Greeting = React.forwardRef(function (props, ref) {
  return (
    <div className="hello">
      <h1 ref={ref}>Hello {props.name}!</h1>
    </div>
  );
});
Greeting.displayName = 'Greeting';

function App() {
  const myGreeting = React.useRef(null);

  React.useLayoutEffect(() => {
    // myH1.current contains a reference to the real DOM node.
    myGreeting.current.innerHTML = 'Hello <u>React</u>!!!';
  });

  return <Greeting name="World" ref={myGreeting} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
