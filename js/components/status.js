var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Status = React.createClass({
	render: function() {
		return (
			<div className="status" key="statusDiv">
				<h3>{this.props.title}</h3>
				<h4>{this.props.currentResult}</h4>
			</div>
		);
	}
});

var Container = connect()(Status);

module.exports = Container;
