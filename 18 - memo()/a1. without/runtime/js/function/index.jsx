/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off", no-console:"off" */

function useFlashRef() {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current.style.transition = 'none';
    ref.current.style.backgroundColor = '#d676ff';

    setTimeout(() => {
      ref.current.style.transition = 'background 0.7s';
      ref.current.style.backgroundColor = '';
    });
  });

  return ref;
}

function Child() {
  console.log('Render Child');
  return <h2 ref={useFlashRef()}>Child</h2>;
}

function Parent() {
  const [name, setName] = React.useState('');

  function nameChanged(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <h1>Parent</h1>
      <div style={{ color: 'darkgray' }}>
        Open the console and observe the number of Child renders when typing.
      </div>
      <div>
        <input autoFocus onChange={nameChanged} value={name} />
      </div>
      <Child />
    </React.Fragment>
  );
}

ReactDOM.render(<Parent />, document.getElementById('root'));
