import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BarNav from './components/Navbar/navbar';
import { Search, Saved, NoMatch, } from './pages'
import GBJumbotron from "./components/Jumbotron/jumbotron";

function App() {
  return (
    <div className="App">
      <BarNav />
      <GBJumbotron />
      <Router>
        <Switch>
          <Route exact path={['/', '/search']}>
            <Search />
          </Route>
          <Route exact path='/saved'>
            <Saved />
          </Route>
          {/* <Route path='/details'>
          <Details />
        </Route> */}
          <Route path='/nomatch'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
