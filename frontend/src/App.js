import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact render={ () =>
          <div>
            In main route
          </div>
        }/>
        <Route path="/category/:categoryName" render={ (props) =>
          <div>
            In category:
            {props.match.params.categoryName}
          </div>
        } />
        <Route path="/editor/:id?" render={(props) =>
          <div>
            In editor {props.match.params.id}
          </div>
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
