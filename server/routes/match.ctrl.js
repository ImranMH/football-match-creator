//app.use('/api/match',match)

module.exports = (express) => {
	var Team = require('../model/team.model');
	var Match = require('../model/match.model');
	var Player = require('../model/player.model');

	const router = express.Router();
	router.get('/', showAllMatch)
	router.post('/newMatch', addNewMatch)
	router.put('/updateMatch', updateMatch)

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
				
				Team.findByIds(resData).then(result=>{
					Match.getMatchById(resData._id).then(result=>{
						res.json(result)
					})					
				})				
			})
			
		})
	}
/* show all match data .......................... */
	function showAllMatch(req, res) {
		
		Match.getMatch().then(response=>{
			console.log('it is showAllMatch method in controler')
			res.json(response)
		})
	}
	/* update match data after finishing game ...............................*/
	async	function updateMatch(req, res) {
		const matchDetail = req.body.match
		await Match.UpdateMatch(matchDetail).then(response => {
			Team.updateTeamOneMatchResult(response).then(result=>{
				Team.updateTeamTwoMatchResult(response).then(doc=>{
					Match.getMatch().then(resData=>{
						res.json(resData)
					})
					
				})
			})
			

		})
	}
	return router
}