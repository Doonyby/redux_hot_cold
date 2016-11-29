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
var Instructions = require('./components/game');


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
	        <Provider store={store}>
	            <Game />
	        </Provider>,
        document.getElementById('app')
    );
});

// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(
//     <Router history={hashHistory}> 
//     	<Route path="/" component={Game}>
// 	        <Provider store={store}>
// 	            <Game />
// 	        </Provider>  
//     	</Route>
//     	<Route path="/instructions" component={Instructions} />
//     </Router>,
//         document.getElementById('app')
//     );
// });

