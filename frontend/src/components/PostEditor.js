
import React, {Component} from "react";
import * as actions from '../actions/posts'
import Post from '../models/post'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class PostEditor extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(actions.savePost(new Post(
      this.author.value,
      this.title.value,
      this.bodyText.value,
      this.category.value
    )))
    this.props.history.push('/')
  }

  render(){
    const {categories} = this.props
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
      <div className="form-group row">
        <div className="col-md-6">
          <label htmlFor="Category">Category</label>
          <select className="form-control" ref={(c) => this.category = c}>
            {categories.map(cat => (
              <option>
                {cat}
              </option>))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="custom-category">or Create A new Category</label>
          <input type="text" name="custom-category" className="form-control"/>
        </div>
      </div>
      <div className="form-group">
        <button className="btn btn-submit" onClick={this.handleSubmit}>Save</button>
        <Link to="/" class="btn btn-default">Cancel</Link>
      </div>
    </form>
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    post: state.posts[ownProps.postId],
    categories: state.categories
  }
}

export default connect(mapStateToProps)(PostEditor)
