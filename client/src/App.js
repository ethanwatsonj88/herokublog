import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar'

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
        <Navbar />
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
      <h2>Title: {props.info.title}</h2>
      <h2>Owned: {props.info.is_owned.toString()}</h2>
      <p>Release: {props.info.release_date}</p>
      <p>Console: {props.info.release_date}</p>
    </div>
    );
}

export default App;