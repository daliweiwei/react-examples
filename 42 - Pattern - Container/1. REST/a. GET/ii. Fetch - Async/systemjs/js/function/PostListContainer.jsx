/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { fetch } from 'slow-fetch';

import ErrorMessage from './ErrorMessage';
import Fetching from './Fetching';
import PostList from './PostList';

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isFetching, setIsFetching] = React.useState(false);

  React.useEffect(
    /* Wrap async call so no Promise is returned */
    fetchPosts,
    [] /* Do effect only once. Set functions of useState never change.  */
  );

  function fetchPosts() {
    (async () => {
      setIsFetching(true);
      try {
        const response = await fetch('posts.json');
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsFetching(false);
      }
    })();
  }

  return (
    <React.Fragment>
      {isFetching && <Fetching />}
      {error ? <ErrorMessage message={error} /> : <PostList posts={posts} />}
    </React.Fragment>
  );
}

export default PostListContainer;
