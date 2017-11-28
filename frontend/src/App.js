import React, { Component } from 'react';
import './css/App.css';
import {Route} from 'react-router-dom'
import AllPostsPage from "./components/AllPostsPage";
import PostEditor from "./components/PostEditor";
import PostView from "./components/PostView"

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact render={ (props) =>
          <AllPostsPage history={props.history}/>
        }/>
        <Route path="/category/:categoryName" render={ ({match}) =>
          <div>
            In category:
            {match.params.categoryName}
          </div>
        } />
        <Route path="/editor/:id?" render={({match, history}) =>
          <PostEditor postId={match.params.id} history={history}></PostEditor>
        }/>
        <Route path="/post/:id" render={({match}) =>
          <PostView id={match.params.id}></PostView>
        } />
      </div>
    );
  }
}

export default App;
