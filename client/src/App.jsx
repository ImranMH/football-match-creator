import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './components/pages/homepage';
import Prediction from './components/pages/Prediction';
const App = (props) => {
  return (
    <div className="ui container">
    	<ul>
	    	<Link to= "/home"> home</Link>
	    	<Link to= "/prediction"> Predittion</Link>
    	</ul>
    	<div>
    		<Switch>
	    		<Route exact path='/home' component={Home}/>
	    		<Route path="/prediction"  component ={Prediction} />
    		</Switch>
    	</div>
    </div>
  )
}

export default App;