import React, {Component} from 'react'

class PostsSummary extends Component {

  gotoPostDetails = (id) => {
    this.props.history.push(`/post/${id}`)
  }


  render() {
    return <div>
        <h2>Posts summary</h2>
      {this.props.posts.map(post => <div className="post row" onClick={() => this.gotoPostDetails(post.id)}>
        <div className="col-md-4">{post.author}</div>
        <div className="col-md-4">{post.title}</div>
        <div className="col-md-4">{post.timestamp}</div>
      </div>)}
      </div>
  }
}

export default PostsSummary