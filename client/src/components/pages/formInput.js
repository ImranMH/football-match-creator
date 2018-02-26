import React, { Component } from 'react';
//import { Form, Button } from 'semantic-ui-react';
//import { connect } from "react-redux";
//import PropTypes from 'prop-types';
import axios from 'axios';
//import {addTeam} from '../../actions/add';
import AddTeamForm from '../forms/AddTeamForm';

class FormInput extends Component {
	static propTypes = {
		//submit: PropTypes.func.isRequired
	}

	teamSubmit = data => {
		//this.props.addTeam(data).then()
		axios.post('/api/team/addTeam',{data}).then(res=> {
			console.log(res)
		})
	}
	render() {
		console.log(this)
		return (
			<div>
				<h2>add Player</h2>
				<AddTeamForm submit={this.teamSubmit} />
			</div>
		);
	}
}
// FormInput.propTypes = {
// 	addTeam:PropTypes.func.isRequired
// }
export default FormInput
//export default connect(null,{addTeam})(FormInput)