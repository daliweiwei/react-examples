/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

interface ListProps {
  children: React.ReactNode;
}

function List(props: ListProps) {
  // Only 1 child allowed (not 0, not 2 or more).
  return <h1>Only: {React.Children.only(props.children)}</h1>;
}

export default List;
