/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const Post = ({title}) => <li>{title}</li>;

class Posts extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { posts: [], error: '', isFetching: false };

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch('posts.json')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
      })
      .then(json => { this.setState({ posts: json }); })
      .catch(error => { this.setState({ error: error.message }); })
      .finally(() => { this.setState({ isFetching: false }); });
  }
  render() {
    return (
      <div>
        {this.state.isFetching && <div>Fetching...</div>}
        {this.state.error ? <div style={{color: 'red'}}>{this.state.error}</div> : null}
        <ul>{
          this.state.posts.map((post) => <Post key={post.id} title={post.title} />)
        }</ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Posts />,
  document.getElementById('app')
);