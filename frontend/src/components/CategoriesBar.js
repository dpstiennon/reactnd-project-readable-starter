
import React, {Component} from "react";
import {Link} from "react-router-dom";

class CategoriesBar extends Component {
  categories = [
    'cheese',
    'reacttips',
    'jobapplications'
  ];



  render(){
    return <div className="categories-bar">
      <h4>Categories</h4>
      {this.categories.map(c =>
        <div className="category-link">
          <Link to={`/category/${c}`}>{c}</Link>
        </div>)}
    </div>
  }
}

export default CategoriesBar