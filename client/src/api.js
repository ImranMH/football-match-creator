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
		single: (dataid)=> {
		return axios.get('/api/team/'+dataid.id, {
				params: {
					id: dataid.id
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
	}
}
