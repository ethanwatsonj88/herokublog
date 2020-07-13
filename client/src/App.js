import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {posts: []}

  componentDidMount() {
    fetch('/posts')
      .then(res => res.json())
      .then(posts => {
        this.setState({
          posts: posts
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Posts</h1>
        <div>
        { this.state.posts.map(post => post.author) }
        </div>
      </div>
    );
  }
}

export default App;