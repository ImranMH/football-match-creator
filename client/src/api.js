import axios from 'axios';
export default {
	team : {
		allTeam: () => 
			axios.get('/api/team/getTeam').then((res) => {
				return   res.data
				//return team
			}
		),
		addNew: (team) =>{
			return axios.post('/api/team/addTeam', team)
		},
		single: (team)=> {
		return axios.get('/api/team/'+team.id, {
				params: {
					id: team.id
				}} )
		},
		editTeam: (id,data) => {

			return axios.put('/api/team/' + id, {
				params: {
					id: id
				},
				data:data
			})
		},
		deleteTeam: (id) => {

			return axios.delete('/api/team/' + id, {
				params: {
					id: id
				}
			})
		},
		addTeam: data => 
			axios.post('/api/team/addTeam',{data}).then(res=> res.data)
	},
	match:{
		addMatch: (data) => {

			return axios.post('/api/match/newMatch', data)
		},
		updateMatch: (matchData) => {

			return axios.put('/api/match/updateMatch', matchData)
		},
		allMatches: () => {
			return axios.get('/api/match')
		},
		filteredMatch: () => {
			return axios.get('/api/match/filtered')
		},
		deleteMatchById: (id) => {
			return axios.delete('/api/match/'+id, {
				params: {
					id: id
				}
			})
		},
		editMatchById: (match) => {
			return axios.put('/api/match/' + match.id, match )
		}
	},
	player:{
		addPlayer: (player) => {
			return axios.post('/api/player/addPlayer', player)
		},
		editPlayer: (player) => {
			return axios.put('/api/player/'+ player._id, player)
		},
		deleteById: (id) => {
			return axios.delete('/api/player/'+id)
		},
		allPlayer: () => {			
			return axios.get('/api/player/allPlayer')
		},
		getPlayerById: (player) => {			
			return axios.get('/api/player/'+player.id, {
				params: {
					id: player.id
				}
			})
		}
	}
}
