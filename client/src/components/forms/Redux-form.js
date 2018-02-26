import React, { Component } from 'react';
import InputComponent from './InputComponent';
export default class ReduxForm extends Component {
	state ={
		data: {
			id: '',
			name: '',
			website: '',
			email: '',
			phone: '',
			username: ''
		}
	}
	onChange = (e) => {
		this.setState({
			data: {...this.state.data,[e.target.name]: e.target.value }
		})
	}

	sendFrom = (e)=> {
		e.preventDefault()
		this.props.getData(this.state.data)
	}
	render() {
		const data = this.state.data;
		console.log(data)
		return (
			<div className="exp2">
			<h2> Form Element</h2>
			<div className="fromElem">
				<form className="contact1-form validate-form" onSubmit ={this.sendFrom}>
				<span className="contact1-form-title">
				Add New User To Redux app
				</span>
				<InputComponent 
					className={"wrap-input1 validate-input"} 
					onChange={this.onChange} 
					value={data.id} 
					name={'id'}
					type= "number"
					placeholder ="Id"
					/>
					<InputComponent
						onChange={this.onChange}
						value={data.name}
						name={'name'}
						placeholder="Name"
					/>
			{/* 	<div className="wrap-input1 validate-input" data-validate="Name is required" >
					<input onChange={this.onChange} value={data.id} className="input1" type="number" name="id" placeholder="Id" />
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1 validate-input" data-validate="Name is required" >
					<input onChange={this.onChange} value={data.name} className="input1" type="text" name="name" placeholder="Name" />
					<span className="shadow-input1"></span>
				</div> */}

				<div className="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
					<input onChange={this.onChange} value={data.email} className="input1" type="email" name="email" placeholder="Email" />
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate="Subject is required" >
							<input onChange={this.onChange} value={data.website} className="input1" type="text" name="website" placeholder="Website" />
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
					<input onChange={this.onChange} value={data.username} className="input1" type="text" name="username" placeholder="Username" />
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1 validate-input" data-validate="Message is required" >
					<input onChange={this.onChange} value={data.phone} className="input1" name="phone" placeholder="Phone"/>
					<span className="shadow-input1"></span>
				</div>

				<div className="container-contact1-form-btn">
					<button className="contact1-form-btn">
						<span>
							Send Email
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
			</div>
		</div>
		);
	}
}