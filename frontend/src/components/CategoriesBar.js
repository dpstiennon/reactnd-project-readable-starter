
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'

class CategoriesBar extends Component {

  render(){
    const {categories} = this.props
    return <div className="categories-bar">
      <h4>Categories</h4>
      {categories.map(c =>
        <div className="category-link">
          <Link to={`/category/${c}`}>{c}</Link>
        </div>)}
    </div>
  }
}

const connectStateToProps = (state) => {
  return {
    categories: state.categories,
    currentCategory: state.currentCategory
  }
}


export default connect(connectStateToProps)(CategoriesBar)