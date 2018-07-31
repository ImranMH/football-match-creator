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
			console.log(team.id)
		return axios.get('/api/team/'+team.id, {
				params: {
					id: team.id
				}} )
		},
		editTeam: (id,data) => {
			console.log('here')
			return axios.put('/api/team/' + id, {
				params: {
					id: id
				},
				data:data
			})
		},
		deleteTeam: (id) => {
			console.log('here')
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
			console.log(data);
			return axios.post('/api/match/newMatch', data)
		},
		allMatches: () => {
			return axios.get('/api/match')
		}
	},
	player:{
		addPlayer: (player) => {
			return axios.post('/api/player/addPlayer', player)
		},
		allPlayer: () => {			
			return axios.get('/api/player/allPlayer')
		}
	}
}
