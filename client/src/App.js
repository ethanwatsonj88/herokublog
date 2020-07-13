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
        { this.state.posts.map((post, i) => {
          return <Post info={post} key={i}></Post>;
        })
        }
      </div>
    );
  }
}

function Post(props) {
  return (
    <div>
      <h1>Author: {props.info.author}</h1>
      <p>Description: {props.info.description}</p>
    </div>
    );
}

export default App;