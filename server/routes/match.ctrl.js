//app.use('/api/match',match)

module.exports = (express) => {
	var Team = require('../model/team.model');
	var Match = require('../model/match.model');
	var Player = require('../model/player.model');

	const router = express.Router();
	router.get('/', showAllMatch)
	router.get('/filtered', getUpCommingMatch)
	router.post('/newMatch', addNewMatch)
	router.put('/updateMatch', updateMatch)
	router.delete('/:id', deleteMatch)
	router.put('/:id', EditMatch)

	function addNewMatch(req, res) {
		let { teamOne, teamTwo, matchNo, group, playDate, playTime, stadium} = req.body
		Team.findTeamsByNames(teamOne, teamTwo).then(resp=>{
			const match = {
				matchNo: matchNo,
				teamOneId: resp[1]._id,
				teamOneName: resp[1].title,
				teamTwoId: resp[0]._id,
				teamTwoName: resp[0].title,
				teamOneFlag: resp[1].flag,
				teamTwoFlag: resp[0].flag,
				group : group,
				playDate: playDate,
				playTime: playTime,
				stadium: stadium
			}
			Match.createMatch(match).then(resData=>{
				Match.getMatchById(resData._id).then(result => {
					res.json(result)
				})				
			})
			
		})
	}
/* show all match data .......................... */
	function showAllMatch(req, res) {
		
		Match.getMatch().then(response=>{
			res.json(response)
		})
	}
/* show all match data .......................... */
	function getUpCommingMatch(req, res) {
		
		Match.getUpCommingMatch().then(response=>{
			res.json(response)
		})
	}
/* Delete match by id data .......................... */
	function deleteMatch(req, res) {
		const id = req.params.id
		Match.deleteMatchById(id).then(response=>{
			Match.getMatch().then(response => {
				res.json(response)
			})
		})
	}
/* Edit match by id data .......................... */
	function EditMatch(req, res) {
		const id = req.params.id
		let match = req.body
		Match.EditMatchById(match).then(response=>{
			Match.getMatch().then(response => {
				res.json(response)
			})
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