import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class AddTeamForm extends Component {
	static propTypes = {
		submit: PropTypes.func.isRequired
	}
	state = {
		data: {
			title:'',
			continent: '',
			group: '',
			flag: '',
			ranking: 0,
		},
		loading: false,
		errors: {}
	}
	onChange = e => this.setState({
		data: {...this.state.data,[e.target.name]: e.target.value }
	})
	submitHandle = e => {
		const errors = this.validator(this.state.data)
		this.setState({ errors:errors })
		console.log(this.state)
		if(Object.keys(errors).length === 0) {
			this.props.submit(this.state.data);
		}
	}
	validator(data) {
		const errors = {}
		if(!data.title) errors.title = "Invalid Country"
		if(!data.continent) errors.continent = "Invalid continent"
		if(!data.group) errors.group = "Invalid Group"
		if(!data.flag) errors.flag = "Invalid flag"
		if(!data.ranking) errors.ranking = "Invalid Ranking"
		return errors
	}
	render() {
		const {data} = this.state
		return (
			<div>
				<h2>add Player</h2>
				<Form onSubmit={this.submitHandle}>
					<Form.Field>
						<label htmlFor="title"> Name Of The Country </label>
						<input type="text" id="title" name="title" placeholder="Brazil" value={data.title} onChange={this.onChange} /> 
					</Form.Field>
					<Form.Field>
						<label htmlFor="continent"> Continent</label>
						<input type="text" id="continent" name="continent" placeholder="Latin America" value={data.continent} onChange={this.onChange} /> 
					</Form.Field>
					<Form.Field>
						<label htmlFor="group"> Group</label>
						<input type="text" id="group" name="group" placeholder="D" value={data.group} onChange={this.onChange} /> 
					</Form.Field>
					<Form.Field>
						<label htmlFor="flag"> flag</label>
						<input type="text" id="flag" name="flag" placeholder="Brazil" value={data.flag} onChange={this.onChange} /> 
					</Form.Field>
					<Form.Field>
						<label htmlFor="ranking"> Ranking</label>
						<input type="text" id="ranking" name="ranking" placeholder="2" value={data.ranking} onChange={this.onChange} /> 
					</Form.Field>
					<Form.Field>
						<label htmlFor="ranking"> Ranking</label>
						 <select name="cont" value={data.continent} onChange={this.onChange}>
				            <option value="europe">Europe</option>
				            <option value="latin_america">Latin America</option>
				            <option value="asia">Asia</option>
				            <option value="africa">Africa</option>
				            <option value="north_america">North America</option>
				         </select>
					</Form.Field>
					<Button primary > Add Team </Button>
				</Form>	
			</div>
		);
	}
}
