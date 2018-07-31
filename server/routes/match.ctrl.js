//app.use('/api/match',match)

module.exports = (express) => {
	var Team = require('../model/team.model');
	var Match = require('../model/match.model');
	var Player = require('../model/player.model');

	const router = express.Router();
	router.get('/', showAllMatch)
	router.post('/newMatch',addNewMatch)

	function addNewMatch(req, res) {
		let { teamOne, teamTwo, matchNo, group, playDate, playTime, stadium} = req.body
		Team.findTeamsByNames(teamOne, teamTwo).then(resp=>{
			const match = {
				matchNo: matchNo,
				teamOne: resp[0]._id,
				teamTwo: resp[1]._id,
				group : group,
				playDate: playDate,
				playTime: playTime,
				stadium: stadium
			}
			Match.createMatch(match).then(resData=>{
				Team.findByIds(resData.match).then(result=>{
					res.json(result)
				})
				
			})
			
		})
	}

	function showAllMatch(req, res) {
		
		Match.getMatch().then(response=>{
			console.log('it is showAllMatch method in controler')
			res.json(response)
		})
	}
	return router
}