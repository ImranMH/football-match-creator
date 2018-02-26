import { combineReducers } from 'redux';
import team from './reducers/team';
import teams from './reducers/teams';
import users from './reducers/user';
import user from './reducers/viewUser';

export default combineReducers({
	teams,
	team,
	users,
	user
})