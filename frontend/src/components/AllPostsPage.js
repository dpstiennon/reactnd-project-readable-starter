
import React, {Component} from "react";
import CategoriesBar from "./CategoriesBar";
import PostsSummary from "./PostsSummary";
import {Link} from "react-router-dom";
import { connect } from 'react-redux'

class AllPostsPage extends Component {

  render(){
    return <div className="all-posts-page">
        <CategoriesBar/>
        <PostsSummary posts={this.props.posts} history={this.props.history} />
      <Link to="/editor" className="btn btn-info btn-large">New Post</Link>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(AllPostsPage)

