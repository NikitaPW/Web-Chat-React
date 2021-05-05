import './App.css';
import React, { useState, useEffect } from "react";
import SideBar from './components/SideBar.jsx';
import Chat from './components/Chat.jsx';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) :
      <div className="app-body">
        <Router>
          <SideBar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat/>
            </Route>
            <Route exact path='/'>
              <Chat />
            </Route>
            
          </Switch>
        </Router>
        </div>
      }
    </div>
    
  );
}

export default App;
