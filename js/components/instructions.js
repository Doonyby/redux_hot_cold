var React = require('react');

var Instructions = function() {
	return (
		<div className="instructions" key="instructionsDiv">
			<h3>Instructions</h3>
			<p>These are instructions.  Blah blah blah.</p>
			<button><a href="/">Return to Game</a></button>
		</div>
		)
}

module.exports = Instructions;