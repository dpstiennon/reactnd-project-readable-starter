import React, { Component } from 'react';
import './css/App.css';
import {Route} from 'react-router-dom'
import AllPostsPage from "./components/AllPostsPage";
import PostEditor from "./components/PostEditor";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact render={ (props) =>
          <AllPostsPage history={props.history}/>
        }/>
        <Route path="/category/:categoryName" render={ (props) =>
          <div>
            In category:
            {props.match.params.categoryName}
          </div>
        } />
        <Route path="/editor/:id?" render={(props) =>
          <PostEditor postId={props.match.params.id}></PostEditor>
        }/>
        <Route path="/post/:id" render={(props) =>
          <div>
            In post detail view for post {props.match.params.id}
          </div>
        } />
      </div>
    );
  }
}

export default App;
