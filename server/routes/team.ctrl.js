// app.use('/api/team',team)

module.exports = (express,model) => {
	const router = express.Router();
	const TeamModel = model.team;
	console.log('team ctrl');

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
		TeamModel.createTeam(data).then(response=>{
			res.json(response)
		},error=>{
			res.json(error)
		})
	}
	// function addTeam(req, res) {
	// 	console.log('posted')
	// 	let data = req.body;
	// 	console.log(data)
	// 	TeamModel.addTeam(data,(response)=>{
	// 		console.log(response);
	// 		res.json(response)
	// 	})
	// }
	function send(req, res) {
		console.log('send')
		let data = req.body;
		res.json(data)
		// TeamModel.addTeam(data,(response)=>{
		// 	console.log(response);
		// 	res.json(response)
		// })
	}
	/*function srart from here*/
	function getAllTeamin(req, res) {
		const data = 	{name:'Maxico',continent:"North America", rank: 21}
		TeamModel.addTeam(data,(response)=>{
			res.json(response)
		})
	}
		/*function srart from here*/
	function getAllTeam(req, res) {
		TeamModel.getTeam().then(data=>{
			res.json(data)
		})
	}

	/*function srart from here*/
	function getSingleTeam(req, res) {
		const id = req.params.id
		TeamModel.getTeamById(id).then(data => {
			res.json(data)
		})
	}
	/*function detete team */
	function editSingleTeam(req, res) {
		
		const id = req.params.id
		data= req.body.data
		TeamModel.updateTeam(id,data).then(data => {
			console.log(data)
		return res.json(data)
		})
	}
	/*function detete team */
	function DeleteSingleTeam(req, res) {
		const id = req.params.id
		TeamModel.deteteTeamById(id).then(data => {
			res.json(data)
		}) 
	}

	return router
}
