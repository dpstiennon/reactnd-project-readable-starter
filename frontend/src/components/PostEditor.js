
import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class PostEditor extends Component {

  render(){
    let categories = ['cheese', 'react tips'];
    return <form class="col-lg-6 col-md-8 col-xs-12">
      <h2>Edit Post</h2>
      <div className="form-group">
        <label htmlFor="Author">Author</label>
        <input type="text" id="Title" className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="Title">Title</label>
        <input type="text" id="Title" className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="Body">Post Body</label>
        <textarea name="Body" id="Body" cols="30" rows="10" className="body form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="Category">Category</label>
        <select class="form-control">
          {categories.map(cat => (
            <option>
              {cat}
            </option>))}
        </select>
      </div>
      <div className="form-group">
        <Link to="/" className="btn btn-submit">Save</Link>
      </div>



    </form>
  }
}