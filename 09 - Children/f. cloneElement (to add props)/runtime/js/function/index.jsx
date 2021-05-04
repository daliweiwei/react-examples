/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting(props) {
  return (
    <i>
      {props.greeting} {props.name}
    </i>
  );
}

function List(props) {
  return (
    <ul>
      {React.Children.map(props.children, (child, i) => (
        <li key={i}>
          {child.props.greeting
            ? child
            : // child is readonly.
              // To changes props/children on the child, use React.cloneElement.
              // New props (2nd argument) will overwrite existing props.
              React.cloneElement(child, { greeting: props.greeting })}
        </li>
      ))}
    </ul>
  );
}

ReactDOM.render(
  <List greeting="Hello">
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" greeting="Good morning" />
  </List>,
  document.getElementById('app')
);
