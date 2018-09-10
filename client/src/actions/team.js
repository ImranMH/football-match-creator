import {BARE_TEAM_ADDED} from '../types';
import api from '../api';

console.log('action')
export const teamAdded = team => ({
	type: BARE_TEAM_ADDED,
	team
})

export const addTeams = data => (dispatch) => 
	api.team.addTeam(data).then(team => dispatch(teamAdded(team)));
/* show all teams */
export const showAllTeams = () => {
	var items = api.team.allTeam()
	return (dispatch) => {
	return	items.then(teams=>{
			dispatch({
				type: "SHOW_TEAMS",
				payload: teams
			})
		})
	}
}

export const team = (id) => {
	const items = api.team.single(id)
	
	return (dispatch) => {
		
		return items.then(team => {
			console.log(team)
			dispatch({
				type: "SHOW_TEAM_BYID",
				payload: team.data
			})
		})
	}
}
export const addTeam = (team) => {
	const AddItem = api.team.addNew( team)

	return (dispatch) => {
		return AddItem.then(team => {
			dispatch({
				type: "ADD_TEAM",
				payload: team.data
			})
		})
	}

}
export const editTeam = (data,id) => {
	const EditItem = api.team.editTeam(id,data)

	return (dispatch) => {
		return EditItem.then(team => {
			console.log(team)
			dispatch({
				type: "EDIT_TEAM",
				payload:team.data
			})
		})
	}

}

export const deleteTeam = (id) => {

	const DeleteItem = api.team.deleteTeam(id)
	return (dispatch) => {
		return DeleteItem.then(team => {
			dispatch({
				type: "DELETE_TEAM",
			})
		})
	}

}

export const sendGroup = (data) => {

	return {
		type:'SEND_GROUP',
		data
	}
}

