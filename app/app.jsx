/*jshint esversion: 6 */
var React = require('react');
var ReactDOM = require('react-dom');
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={Main}/>
      <Route exact path="/" component={Timer}/>
      <Route path="/countdown" component={Countdown}/>
    </div>
  </Router>,
  document.getElementById('app')
);
