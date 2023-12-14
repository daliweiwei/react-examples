/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/
import { Prompt } from 'react-router-dom';

function Page1() {
  return (
    <>
      <Prompt when={true} message="Are you sure you want to leave?" />

      <h2>1st page (with prompt)</h2>
    </>
  );
}

export default Page1;
