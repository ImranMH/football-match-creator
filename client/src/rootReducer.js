import { combineReducers } from 'redux';
import team from './reducers/team';
import teams from './reducers/teams';
import users from './reducers/user';
import user from './reducers/viewUser';
import groupTeam from './reducers/groupTeam';

export default combineReducers({
	teams,
	team,
	groupTeam,
	users,
	user
})