import React, { Component } from 'react'
import {connect} from 'react-redux'

export default class Comments extends Component {
  render() {
    const {comments} = this.props
    return <form className="col-lg-6 col-md-8 col-xs-12">
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
          <label htmlFor="Body">Comment Body</label>
          <textarea name="Body" id="Body" cols="30" rows="10"
                    className="body form-control"
                    ref={(text) => this.bodyText = text}/>
        </div>

        {comments.map(comment => {
          <div>
            Comment
          </div>
        })}

      </form>
  }
}


