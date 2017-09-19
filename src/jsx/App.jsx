import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import ListPage from './ListPage';
import ArticlePage from './ArticlePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header title="Navbar" />
            <Switch>
              <Route exact path="/fb/results" component={ListPage} />
              <Route path="/fb" component={ArticlePage} />
            </Switch> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
