
import React, {Component} from "react";
import CategoriesBar from "./CategoriesBar";
import PostsSummary from "./PostsSummary";
import {Link} from "react-router-dom";

class AllPostsPage extends Component {

  render(){
    return <div className="all-posts-page">
        <CategoriesBar/>
        <PostsSummary posts={this.props.posts} />
      <Link to="/editor" className="btn btn-info btn-large">New Post</Link>
    </div>
  }
}

export default AllPostsPage