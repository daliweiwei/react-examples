/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { useOptimistic, useState, useRef } from 'react';

function GreetingEditor({ name, sendName }) {
  const formRef = useRef();
  const [optimisticState, addOptimisticName] = useOptimistic(
    name,
    (state, newName) => {
      return newName;
    }
  );

  async function formAction(formData) {
    const name = formData.get('name');
    addOptimisticName(name);
    sendName(name);
    formRef.current.reset();
  }

  return (
    <>
      <form action={formAction} ref={formRef}>
        <input type="name" name="name" placeholder="Name" />
        <button type="submit">Send</button>
      </form>
      <p>
        <b>Child name:</b> {optimisticState}
      </p>
    </>
  );
}

function App() {
  const [name, setName] = useState('World');

  async function sendName(newName) {
    // Simulate sending this to the server and getting response
    await new Promise(resolve => setTimeout(resolve, 1000));
    setName(newName);
  }
  return (
    <>
      <GreetingEditor name={name} sendName={sendName} />
      <p>
        <b>Parent name:</b> {name}
      </p>
    </>
  );
}

export default App;
