// app.use('/api/team',team)

module.exports = (express) => {
	var Team = require('../model/team.model');
	var Match = require('../model/match.model');	
	
	const router = express.Router();



	/* setting apis end point routes*/
	router.post('/addTeam', addTeam);
	router.post('/send', send);
	router.get('/getTeam', getAllTeam);
	router.get('/:id', getSingleTeam);
	router.put('/:id',editSingleTeam );
	router.delete('/:id', DeleteSingleTeam);

	/*function srart from here*/
	function addTeam(req, res) {
		
		let data = req.body;
		 data.title.toLowerCase()
		 data.group.toUpperCase()
		Team.createTeam(data).then(response=>{
			res.json(response)
		},error=>{
			res.json(error)
		})
	}

	function send(req, res) {
		console.log('send')
		let data = req.body;
		res.json(data)
		// Team.addTeam(data,(response)=>{
		// 	console.log(response);
		// 	res.json(response)
		// })
	}
	/*function srart from here*/
	function getAllTeamin(req, res) {
		const data = 	{name:'Maxico',continent:"North America", rank: 21}
		Team.addTeam(data,(response)=>{
			res.json(response)
		})
	}
		/*function srart from here*/
	function getAllTeam(req, res) {
		Team.getTeam().then(data=>{
			res.json(data)
		})
	}

	/*function srart from here*/
	function getSingleTeam(req, res) {
		const team= req.params.id
		Team.getTeamById(team).then(data => {
			res.json(data)
		})
	}
	/*function detete team */
	function editSingleTeam(req, res) {
		let data = req.body.data;
		 data.title.toLowerCase()
		 data.group.toUpperCase()
		const id = req.params.id
		Team.updateTeam(id,data).then(data => {
			Team.getTeamById(data._id).then(data => {
				res.json(data)
			})
		})
	}
	/*function detete team */
	function DeleteSingleTeam(req, res) {
		const id = req.params.id
		Team.deteteTeamById(id).then(data => {
			res.json(data)
		}) 
	}

	return router
}
