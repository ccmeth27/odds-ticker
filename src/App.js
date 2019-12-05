import React from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';
import TickerContainer from "./TickerContainer"

class App extends React.Component {

  render(){
    return (
      <div className="App">  
        <header>
          <h1 className="title">Sports Ticker</h1>
        </header>
        <TickerContainer />
      </div>
    );
  }
}

export default withRouter(App);