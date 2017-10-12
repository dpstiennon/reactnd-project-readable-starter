
import React, {Component} from "react";
import CategoriesBar from "./CategoriesBar";
import PostsSummary from "./PostsSummary";

class AllPostsPage extends Component {

  render(){
    return <div className="all-posts-page">
        <CategoriesBar/>
        <PostsSummary posts={this.props.posts} />
    </div>
  }
}

export default AllPostsPage