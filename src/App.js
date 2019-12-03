import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import TickerContainer from "./TickerContainer"




class App extends React.Component {

  render(){
    return (
      <div className="App">  
        <header>
          <h1 className="title">Sports Odds Ticker</h1>
        </header>
        <TickerContainer />
      </div>
    );
  }
  
}

export default App;