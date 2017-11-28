import React, { Component } from 'react'

export default class UpvoteWidget extends Component {

  render() {
    const { post, upvote, downvote, voteCount, className } = this.props
    return <div className={className}>
      <button type="button" className="btn btn-default btn-sm" onClick={() => upvote(post)}>
        <span className="glyphicon glyphicon-thumbs-up"></span> Upvote
      </button>
      <span>{voteCount}</span>
      <button type="button" className="btn btn-default btn-sm" onClick={() => downvote(post)}>
        <span className="glyphicon glyphicon-thumbs-down"></span> Downvote
      </button>

    </div>
  }
}

