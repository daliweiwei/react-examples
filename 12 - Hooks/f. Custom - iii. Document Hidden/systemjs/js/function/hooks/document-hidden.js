/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function useIsDocumentHidden() {
  // Hidden state variable
  const [isHidden, setIsHidden] = React.useState(document.hidden);

  React.useEffect(() => {
    // Function to change state
    function handleVisibilityChange() {
      setIsHidden(document.hidden);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Return current state
  return isHidden;
}

export default useIsDocumentHidden;
