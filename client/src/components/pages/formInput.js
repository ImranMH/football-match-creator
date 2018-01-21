import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AddTeamForm from '../forms/AddTeamForm';

export default class FormInput extends Component {
	static propTypes = {
		//submit: PropTypes.func.isRequired
	}
	// state = {
	// 	data: {
	// 		title:'',
	// 		continent: '',
	// 		group: '',
	// 		flag: '',
	// 		ranking: 0,
	// 	},
	// 	loading: false,
	// 	errors: {}
	// }
	// onChange = e => this.setState({
	// 	data: {...this.state.data,[e.target.name]: e.target.value }
	// })
	// submitHandle = e => {
	// 	const errors = this.validator(this.state.data)
	// 	this.setState({ errors })
	// 	console.log(this.state)
	// 	if(Object.keys(errors).length === 0) {
	// 		this.props.submit = this.state.data;
	// 	}
	// }
	teamSubmit = e => {
		console.log(e)
	}
	render() {

		return (
			<div>
				<h2>add Player</h2>
				<AddTeamForm submit={this.teamSubmit} />
			</div>
		);
	}
}
