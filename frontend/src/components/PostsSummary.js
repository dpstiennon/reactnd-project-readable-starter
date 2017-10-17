import React, {Component} from 'react'

const posts = [
  {
    id: '123',
    timestamp: Date.now(),
    title: '',
    body: 'First Post! LOL!',
    author: 'David Stiennon',
    category: 'cheese',
    voteScore: 3,
    deleted: false
  },
  {
    id: '123',
    timestamp: Date.now(),
    title: '',
    body: 'Star wars fandom',
    author: 'David Stiennon',
    category: 'cheese',
    voteScore: 3,
    deleted: false
  },
  {
    id: '123',
    timestamp: Date.now(),
    title: '',
    body: 'Cheddar, Gouda, and many others',
    author: 'David Stiennon',
    category: 'cheese',
    voteScore: 3,
    deleted: false
  }
  ];

class PostsSummary extends Component {

  render() {
    return <div>
        <h2>Posts summary</h2>
      {posts.map(post => <div className="post row ">
        <div className="col-md-4">{post.author}</div>
        <div className="col-md-4">{post.body}</div>
        <div className="col-md-4">{post.timestamp}</div>
      </div>)}
      </div>
  }
}

export default PostsSummary