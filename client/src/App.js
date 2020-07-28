import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from 'react-router-dom'
import BarNav from './components/Navbar/navbar';
import { Search, Saved, NoMatch, } from './pages'
import GBJumbotron from "./components/Jumbotron/jumbotron";


function App() {
  return (
    <div className="App">
      <BarNav />
      <GBJumbotron />
      <Switch>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/saved'>
          <Saved />
        </Route>
        {/* <Route path='/details'>
          <Details />
        </Route> */}
        <Route path='/nomatch'>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
