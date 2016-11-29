require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var Provider = require('react-redux').Provider;

var store = require('./store');
var Game = require('./components/game');
var Instructions = require('./components/instructions');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
    <Provider store={store}>	
	    <Router history={hashHistory}> 
	    	<Route path="/" component={Game} />
	    	<Route path="/instructions" component={Instructions} />
	    </Router>
    </Provider> ,
        document.getElementById('app')
    );
});

