import React from 'react';
import {NavLink as Link} from 'react-router-dom';

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <Link exact to="/" activeClassName="active-link">Timer</Link>
          </li>
          <li>
            <Link to="/" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://github.com/hanyoupcho" target="_blank">Hanyoup Cho</a>
          </li>
        </ul>
      </div>
    </div>
  )
};

module.exports = Navigation;
