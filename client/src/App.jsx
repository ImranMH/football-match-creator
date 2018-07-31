import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TestRedux from './components/exper/ReduxHome';
import Home from './container/homepage';
import Prediction from './components/pages/Prediction';
// //import { Tab } from './semantic/dist/semantic'
import AddTeam from './container/AddTeam'
import SingleTeam from'./container/SingleTeam'
import EditTeam from'./container/EditTeam'
import Fixture from'./container/Fixture'
import Players from'./container/PlayerHome'
import Navigation from'./components/pages/Navigation'

// const panes = [
//   { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
//   { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
//   { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
// ]

// const TabExamplePointing = () => (
//   <Tab menu={{ pointing: true }} panes={panes} />
// )
const App = (props) => {


  return (
    <div className=" container">
			<Navigation />
    	<div>
    		<Switch>
					<Route path="/" exact component={Home} />
					<Route path='/test' component={TestRedux}/>
	    		<Route path="/team/new"  component ={AddTeam} />
	    		<Route path="/prediction"  component ={Prediction} />
					<Route path="/team/:id/edit" component={EditTeam} />
					<Route path="/team/:id" component={SingleTeam} />
					<Route path="/fixture" component={Fixture} />
					<Route path="/players" component={Players} />
    		</Switch>
    	</div>
    </div>
  )
}
export default App;




/*import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import {Route, Switch, Link} from 'react-router-dom';
import Home from './components/pages/homepage';
import Prediction from './components/pages/Prediction';

export default class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
	      <div className="ui container">
	        <Menu pointing>
	          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}  />
	          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
	          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
	          <Menu.Menu position='right'>
	            <Menu.Item>
	              <Input icon='search' placeholder='Search...' />
	            </Menu.Item>
	          </Menu.Menu>
	        </Menu>

	        <Segment>
          	<div>
			    		<Switch>
				    		<Route exact path='/home' component={Home}/>
				    		<Route path="/friends"  component ={Prediction} />
			    		</Switch>
			    	</div>
	        </Segment>
	      </div>
      </div>
    )
  }
}*/
