var React = require('react');
var connect = require('react-redux').connect;
var router = require('react-router');
var Link = router.Link;


var GameDisplay = require('./game-display');
var NewGame = require('./new-game');
var actions = require('../actions/index');

var Game = React.createClass({
	render: function() {
		console.log(this.props.game);
		return (
			<div className="game" key="gameDiv">
				<h1>Hot or Cold</h1>
				<GameDisplay game={this.props.game} key="gameDisplay" />
				<NewGame key="newGame" title="new game button"/>
				<button><Link to={'/instructions'}>Instructions</Link></button>
			</div>
		);
	}
});

var mapStateToProps = function(state, props) {
    return {
        game: state
    };
};

var Container = connect(mapStateToProps)(Game);
module.exports = Container;