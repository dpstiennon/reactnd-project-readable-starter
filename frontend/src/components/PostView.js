import React, { Component } from 'react'
import {connect} from 'react-redux'
import UpvoteWidget from './UpvoteWidget'
import Comments from './Comments'
import {savePost} from '../actions/posts'

class PostView extends Component {

  render() {
    const {post, comments, upvote, downvote} = this.props
    return <div className="row post-container ">
      <h3 className="col-md-12">{post.title}</h3>
      <p className="col-md-12">{post.body}</p>
      <UpvoteWidget
        post={post}
        className="col-md-12"
        upvote={upvote}
        downvote={downvote}
        voteCount={post.voteScore}
      ></UpvoteWidget>
      <Comments comments={comments} className="col-md-12"></Comments>
    </div>

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.find(p => p.id === ownProps.id),
    comments: state.comments.filter(c => c.postId = ownProps.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upvote: (post) => {
      post.voteScore += 1
      dispatch(savePost(post))
    },
    downvote: (post) => {
      post.voteScore -= 1
      dispatch(savePost(post))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView)

