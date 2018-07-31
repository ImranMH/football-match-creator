import { combineReducers } from 'redux';
import team from './reducers/team';
import teams from './reducers/teams';
import matches from './reducers/matches';
import users from './reducers/user';
import user from './reducers/viewUser';
import groupTeam from './reducers/groupTeam';
import player from './reducers/player.rd';

export default combineReducers({
	teams,
	team,
	groupTeam,
	matches,
	player,
	users,
	user
})