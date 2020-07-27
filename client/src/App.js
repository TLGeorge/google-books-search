import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from 'react-router-dom'
import { Search, Saved } from './components'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/saved'>
          <Saved />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
