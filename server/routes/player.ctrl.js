// app.use('/api/player',player)

module.exports = (express) => {
	var Team = require('../model/team.model');
	var Match = require('../model/match.model');	
	var Player = require('../model/player.model');	

	const router = express.Router();
	router.post('/addplayer', addpalyer)
	router.get('/allPlayer', allPalyer)
	router.get('/:id', getPlayerById)
	router.put('/:id', editPlayerById)
	router.delete('/:id', deletePlayerById)

	/* add player to db */
	async function addpalyer(req, res) {
		let player = req.body;
		let country = player.country;
		await	Team.findTeamsByName(country).then(team=>{

			Player.addPlayer(player, team).then(player=>{

				 Team.addPlayer(team, player._id).then(resdata=>{

					res.json(player)
				})				
			})
		})
		
	}


	async function allPalyer(req, res) {
		await Player.allPlayer().then(data=>{
			res.json(data)
		})
	}

	async function getPlayerById(req, res) {
		await Player.getPlayerById(req.params.id).then(data => {
			res.json(data)
		})
	}
	async function editPlayerById(req, res) {
		let player = req.body;
		await Player
			.editPlayerById(req.params.id, player)
			.then(data => {
				console.log(data);
				res.json(data)
			})		 
	}
	async function deletePlayerById(req, res) {
		console.log(req.params.id)
		await Player.deletePlayerById(req.params.id).then(data => {
			Team.deletePlayerById(data.country, req.params.id ).then(team=>{
				res.json(team)
			})
			
		})
	}
	return router
}