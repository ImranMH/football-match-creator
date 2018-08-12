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
				teamOneId: resp[1]._id,
				teamOneName: resp[1].title,
				teamTwoId: resp[0]._id,
				teamTwoName: resp[0].title,
				group : group,
				playDate: playDate,
				playTime: playTime,
				stadium: stadium
			}
			Match.createMatch(match).then(resData=>{
				Match.getMatchById(resData._id).then(result => {
					res.json(result)
				})
				/* deactivate this function call */
				// Team.findByIds(resData).then(result=>{
										
				// })				
			})
			
		})
	}
/* show all match data .......................... */
	function showAllMatch(req, res) {
		
		Match.getMatch().then(response=>{
			res.json(response)
		})
	}
	/* update match data after finishing game ...............................*/
	function updateMatch(req, res) {
		const matchDetail = req.body.match
		 Match.UpdateMatch(matchDetail).then(response => {

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