// app.use('/api/player',player)

module.exports = (express) => {
	var Team = require('../model/team.model');
	var Match = require('../model/match.model');	
	var Player = require('../model/player.model');	

	const router = express.Router();
	router.post('/addplayer', addpalyer)
	router.get('/allPlayer', allPalyer)

	/* add player to db */
	function addpalyer(req, res) {
		let player = req.body;
		let country = player.country;
		Team.findTeamsByName(country).then(team=>{

			Player.addPlayer(player, team).then(player=>{

				Team.addPlayer(team, player._id).then(resdata=>{

					res.json(player)
				})				
			})
		})
		
	}


	function allPalyer(req, res) {
		Player.allPlayer().then(data=>{
			res.json(data)
		})
	}
	return router
}