/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';

function Post({ title }) {
  return createElement('li', null, title);
}

export default Post;
