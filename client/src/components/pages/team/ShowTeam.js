/* 
	Team Home upper block
*/
import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
//import axios from 'axios';


export default class ShowTeam extends Component {


	render() {
		const style = {
			width: '100px',
			height: '50px',
		};
		const {teams} = this.props
	  return (
			<li className="teamlit" key={teams.ranking}>
				<div className="teamflag">
					<img style={style} src={`/flags/${teams.flag}.png`} alt={teams.title} />
					
				</div>
				<div className="teaminfo">
					<h2 className="teaminfo_heading" > <Link to={`team/${teams._id}`}> {teams.title} </Link></h2>
					<h3 >Rangking:<strong>{teams.ranking} </strong> </h3>
					<h3>Continent:<strong>{teams.continent} </strong> </h3>
				</div>
				<div className="group"> <p>{teams.group}</p> </div>
				<div><Link to ={`/team/${teams._id}/edit`}> Edit </Link></div>
			</li>
	  );
	}
}

