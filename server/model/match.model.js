
	const q = require('q')
	const mongoose = require('mongoose')

	 const MatchSchema = require('../schema/match.schema')
	// const TeamSchema = require('../schema/team.schema')(mongoose)

const Match = mongoose.model('Match', MatchSchema);
// const TeamModel = mongoose.model('Team', TeamSchema);
let api = {
	createMatch,
	updateTeam,
	getMatch,
	getMatchById,
	UpdateMatch,
	getWeblinkWithSkip
}
module.exports = api
	
	/*apis functtions ......................*/
		function getWeblinkWithSkip(skip) {
			console.log('getWeblinkWithSkip')
			var perPage = 2
			var deferred = q.defer();
			Match.find().sort({
				"_id": -1
			}).limit(10).populate('teamOne').exec(function (err, item) {
				if (err) {
					deferred.reject(err)
				}
				console.log(skip);
				//console.log(item);
				deferred.resolve(item)
			})
			return deferred.promise;
		};

	/* get all match like fixture ......................................... */
	function getMatch(match) {
		// var deferred = q.defer();
		return Match
			.find()
			.populate('teamOne.id')
			.populate('teamTwo.id')
			.exec()
	}
/* get  match by id  ......................................... */
function getMatchById(Id) {
	// var deferred = q.defer();
	return Match
		.findById(Id)
		.populate('teamOne.id')
		.populate('teamTwo.id')
		.exec()
		
}
	/* create a new match schedule  ................................*/
	function createMatch(data) {
		var deferred = q.defer();
		var match = new Match({
			matchNo: data.matchNo,
			teamOne:{
				name: data.teamOneName,
				id: data.teamOneId
			} ,
			teamTwo: {
				id: data.teamTwoId,
				name: data.teamTwoName
			},
			group: data.group,
			playDate: data.playDate,
			playTime: data.playTime,
			stadium: data.stadium
		})
		match.save(function (err, result) {
			if (err) {
				deferred.reject(err)
			}	
			deferred.resolve(result)
		})

		return deferred.promise;
	}
/* update match result when match finished .............................. */
	function UpdateMatch(matchData) {
		return Match.findById(matchData.id)
			.then(match=>{
			match.teamOne.score = matchData.teamOneScore
			match.teamOne.conceded = matchData.teamTwoScore
			match.teamTwo.score = matchData.teamTwoScore
			match.teamTwo.conceded = matchData.teamOneScore

			if (match.teamOne.score > match.teamOne.conceded) {
				match.teamOne.point = 3
				match.teamTwo.point = 0
				match.winScore = matchData.teamOneScore
				match.loseScore = matchData.teamTwoScore
				match.winner.id = matchData.teamOne.id
				match.winner.score = matchData.teamOneScore
				match.winner.point = 3
				match.looser.id = matchData.teamTwo.id
				match.looser.score = matchData.teamTwoScore
				match.looser.point = 0
			} else if (match.teamOne.score === match.teamOne.conceded) {
				match.drow = true
				match.teamOne.point = 1
				match.teamTwo.point = 1
				match.looser.name = null
				match.winner.name = null
				match.looser.score = match.teamOne.score
				match.winner.score = match.teamOne.conceded
			} else {
				match.teamOne.point = 0
				match.teamTwo.point = 3
				match.winScore = matchData.teamTwoScore
				match.loseScore = matchData.teamOneScore
				match.winner.id = matchData.teamTwo.id
				match.winner.score = matchData.teamTwoScore
				match.winner.point = 3
				match.looser.id = matchData.teamOne.id
				match.looser.score = matchData.teamOneScore
				match.looser.point = 0
			}
			match.finished = true
			return match.save()
		}).catch(err=>{
			console.log(err);
		})		
	}
	/* function UpdateMatch(matchData) {
		var deferred = q.defer();
		console.log(matchData);
		return Match
			.findById(matchData.id, function(err, match){
				if(err){
					console.log(err);
				}
				match.teamOne.score = matchData.teamOneScore
				match.teamOne.conceded = matchData.teamTwoScore
				match.teamTwo.score = matchData.teamTwoScore
				match.teamTwo.conceded = matchData.teamOneScore
				
				if (match.teamOne.score > match.teamOne.conceded) {
					match.teamOne.point = 3
					match.teamTwo.point = 0
					match.winScore = matchData.teamOneScore
					match.loseScore = matchData.teamTwoScore
					match.winner.id = matchData.teamOne.id
					match.winner.score = matchData.teamOneScore
					match.winner.point = 3
					match.looser.id = matchData.teamTwo.id
					match.looser.score = matchData.teamTwoScore
					match.looser.point = 0
				} else if (match.teamOne.score === match.teamOne.conceded) {
					match.drow = true
					match.teamOne.point = 1
					match.teamTwo.point = 1
					match.looser.name = null
					match.winner.name = null
					match.looser.score = match.teamOne.score
					match.winner.score = match.teamOne.conceded
				} else {
					match.teamOne.point = 0
					match.teamTwo.point = 3
					match.winScore = matchData.teamTwoScore
					match.loseScore = matchData.teamOneScore
					match.winner.id = matchData.teamTwo.id
					match.winner.score = matchData.teamTwoScore
					match.winner.point = 3
					match.looser.id = matchData.teamOne.id
					match.looser.score = matchData.teamOneScore
					match.looser.point = 0
				}
				match.finished = true

				match.save((err,res)=>{
					if(err){
						deferred.reject(err)
					}
					console.log('match saving');
					console.log(res);
					deferred.resolve(res)
				})
			})
	} */
	function updateTeam(){
		
	}


	/* end of all function ............ */


