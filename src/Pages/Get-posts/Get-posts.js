import React, { Component } from 'react'

class MyComponent extends Component {
  state = {
    phrase: '',
    count: 2,
    posts: [],
  }

  componentDidMount() {
    fetch(`http://jsonplaceholder.typicode.com/posts/?_limit=${this.state.count}`)
      .then((response) => response.json())
      .then((result) => this.setState({ posts: result }))
      .catch((error) => {
        throw error
      })
    this.setState({ ...this.state, count: this.state.count + 1 })
  }

  fetchPosts = () => {
    fetch(`http://jsonplaceholder.typicode.com/posts/?_limit=${this.state.count}`)
      .then((response) => response.json())
      .then((result) => this.setState({ posts: result }))
      .catch((error) => {
        throw error
      })
    this.setState({ ...this.state, count: this.state.count + 1 })
  }

  shouldComponentUpdate() {
    return true
  }

  componentDidUpdate() {
    console.log('I am a component Did Update')
  }

  componentWillUnmount() {
    console.log('I am a component Will Unmount')
  }

  render() {
    return (
      <div>
        <h1>This is my component.</h1>
        <button type="submit" onClick={this.fetchPosts}>
          one more post, please
        </button>

        <div>
          {this.state.posts.length > 0 && (
            <ul>
              <p>fuck</p>
              {this.state.posts.map((post) => (
                <li key={post.id}>
                  {post.id}: {post.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default MyComponent
