
import React, {Component} from "react";

export default class PostEditor extends Component {

  render(){
    return <form>
      <div className="form-group">
        <label htmlFor="Title">Title</label>
        <input type="text" id="Title" className="form-control"/>
      </div>

    </form>
  }
}