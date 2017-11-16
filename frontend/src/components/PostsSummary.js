import React, {Component} from 'react'

const posts = [
  {
    id: '123',
    timestamp: Date.now(),
    title: 'First Post! LOL!',
    body: 'First Post! LOL!',
    author: 'David Stiennon',
    category: 'cheese',
    voteScore: 3,
    deleted: false
  },
  {
    id: '456',
    timestamp: Date.now(),
    title: 'Star wars fandom',
    body: 'Star wars fandom',
    author: 'David Stiennon',
    category: 'cheese',
    voteScore: 3,
    deleted: false
  },
  {
    id: '789',
    timestamp: Date.now(),
    title: 'Cheddar, Gouda, and many others',
    body: 'Cheddar, Gouda, and many others',
    author: 'David Stiennon',
    category: 'cheese',
    voteScore: 3,
    deleted: false
  }
  ];

class PostsSummary extends Component {

  gotoPostDetails = (id) => {
    this.props.history.push(`/post/${id}`)
  }


  render() {
    return <div>
        <h2>Posts summary</h2>
      {posts.map(post => <div className="post row" onClick={() => this.gotoPostDetails(post.id)}>
        <div className="col-md-4">{post.author}</div>
        <div className="col-md-4">{post.title}</div>
        <div className="col-md-4">{post.timestamp}</div>
      </div>)}
      </div>
  }
}

export default PostsSummary