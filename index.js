import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './src/App';
import Odds from './src/Odds'
import Scores from './src/Scores'
import Fantasy from './src/Fantasy'
import Notfound from './src/Notfound'
import * as serviceWorker from './src/serviceWorker';


   
const routing = (
    <Router>
        <ul className="nav-links">
          <li className="links">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
          </li>
          <li className="links">
            <NavLink activeClassName="active" to="/odds">Game Odds</NavLink>
          </li>
          <li className="links">
            <NavLink activeClassName="active" to="/live-scores">Live Scores</NavLink>
          </li>
          <li className="links">
            <NavLink activeClassName="active" to="/fantasy">Fantasy Stats</NavLink>
          </li>
        </ul>
        <App />
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();

        // <ul className="nav-links">
        //   <li className="links">
        //     <NavLink exact activeClassName="active" to="/">Home</NavLink>
        //   </li>
        //   <li className="links">
        //     <NavLink activeClassName="active" to="/odds">Odds</NavLink>
        //   </li>
        //   <li className="links">
        //     <NavLink activeClassName="active" to="/live-scores">Live Scores</NavLink>
        //   </li>
        //   <li className="links">
        //     <NavLink activeClassName="active" to="/fantasy">Fantasy</NavLink>
        //   </li>
        // </ul>