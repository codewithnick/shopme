import React from "react"
import './App.css';
import Header from '../src/Header'
import Home from '../src/Home'
import {BrowserRouter as Router,Switch,Route}
from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Home/>      
          </Route>
          <Route path='/'>
            <Header />
            <Home/>      
          </Route>
        </Switch>
        <div>

        </div>
      </div>
    </Router>
  );
}

export default App;
