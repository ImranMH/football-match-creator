module.exports = (express,model) => {
	const router = express.Router();
	const TeamModel = model.team;
	console.log('team ctrl');
	/* setting apis end point routes*/
	router.get('/read', getAllTeam);


	/*function srart from here*/
	function getAllTeam(req, res) {
		const data = 	{name:'Maxico',continent:"North America", rank: 21}
		TeamModel.addTeam(data,(response)=>{
			console.log(response);
			res.json(response)
		})
	}


	return router
}
