var React = require('react');


var Status = React.createClass({
	render: function() {
		return (
			<div className="status" key="statusDiv">
				<h3>{this.props.title}</h3>
			</div>
		);
	}
});

module.exports = Status;