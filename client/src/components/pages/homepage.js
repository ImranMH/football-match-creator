import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import AddTeamForm from'../forms/AddTeamForm'
const Homepage = (props) => {
  return (
    <div>
    	<button><Link to ="./home/update" >Update User</Link></button>
    	<h1> Homepage </h1>
    	<div> 
			
    		
    	</div>
    </div>
  )
}

export default Homepage;