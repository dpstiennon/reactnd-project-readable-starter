
import React, {Component} from "react";
import * as actions from '../actions/posts'
import Post from '../models/post'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

class PostEditor extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(actions.savePost(new Post(
      this.author.value,
      this.title.value,
      this.bodyText.value,
      this.category.value
    )))
    // withRouter.history.push('/')
  }

  render(){
    let categories = ['cheese', 'react tips'];
    return <form className="col-lg-6 col-md-8 col-xs-12">
      <h2>Edit Post</h2>
      <div className="form-group">
        <label htmlFor="Author">Author</label>
        <input type="text"
               id="Title"
               className="form-control"
               ref={(t) => this.title = t}/>
      </div>
      <div className="form-group">
        <label htmlFor="Title">Title</label>
        <input type="text"
               id="Title"
               className="form-control"
               ref={(t) => this.author = t}/>
      </div>
      <div className="form-group">
        <label htmlFor="Body">Post Body</label>
        <textarea name="Body" id="Body" cols="30" rows="10"
                  className="body form-control"
                  ref={(text) => this.bodyText = text}/>
      </div>
      <div className="form-group">
        <label htmlFor="Category">Category</label>
        <select className="form-control" ref={(c) => this.category = c}>
          {categories.map(cat => (
            <option>
              {cat}
            </option>))}
        </select>
      </div>
      <div className="form-group">
        <button className="btn btn-submit" onClick={this.handleSubmit}>Save</button>
      </div>
    </form>
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    post: state.posts[ownProps.postId]
  }
}

export default connect(mapStateToProps)(PostEditor)
