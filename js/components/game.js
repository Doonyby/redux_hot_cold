var React = require('react');
var connect = require('react-redux').connect;
var router = require('react-router');
var Link = router.Link;


var GameContainer = require('./game-container');
var NewGame = require('./new-game');
var actions = require('../actions/index');

var Game = React.createClass({
	resetGame: function() {
		console.log('reseting game');
	},

	render: function() {
		console.log(this.props);
		return (
			<div className="game" key="gameDiv" onClick={this.resetGame}>
				<h1>Hot or Cold</h1>
				<GameContainer key="none" title={this.props.game.number} />
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