
	const q = require('q')
	const mongoose = require('mongoose')

	 const MatchSchema = require('../schema/match.schema')
	// const TeamSchema = require('../schema/team.schema')(mongoose)

const MatchModel = mongoose.model('MatchModel', MatchSchema);
// const TeamModel = mongoose.model('Team', TeamSchema);
let api = {
	showAll,
	createMatch,
	updateTeam,
	getMatch,
	getWeblinkWithSkip
}
module.exports = api
	
	/*apis functtions ......................*/
		function getWeblinkWithSkip(skip) {
			console.log('getWeblinkWithSkip')
			var perPage = 2
			var deferred = q.defer();
			MatchModel.find().sort({
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
	function showAll(){
		var deferred = q.defer();
		console.log('match model')
		// MatchModel.find({} ,(err, result) => {
		// 	if (err) {
		// 		deferred.reject(err)
		// 	}
		// 	deferred.resolve(result)
		// })
		// MatchModel.findById('5a7b4f9340ce191d3c504ac1').populate('teamOne').exec((err, result) => {
		// 	if (err) {
		// 		deferred.reject(err)
		// 	}
		// 	console.log(result)
		// 	deferred.resolve(result)
		// })
		MatchModel.find()
			// .populate('teamOne')
			.exec( function (err, result)  {
			if (err) {
				deferred.reject(err)
			}
			console.log(result)
			deferred.resolve(result)
		}) 

		return deferred.promise;
	}
	
	function getMatch(match) {
		var deferred = q.defer();
		MatchModel.find()
			.populate('teamOne')
			.populate('teamTwo')
			.exec(function (err,user) {

				if (err) {
					 deferred.reject(err)
				}
				deferred.resolve(user)

			})
		 return deferred.promise;
	}
	function createMatch(data) {
		var deferred = q.defer();
		var match = new MatchModel({
			matchNo: data.matchNo,
			teamOne: data.teamOne,
			teamTwo: data.teamTwo,
			group: data.group,
			playDate: data.playDate,
			playTime: data.playTime,
			stadium: data.stadium
		})
		match.save(function (err, result) {
			if (err) {
				deferred.reject(err)
			}
			console.log(result);		
			deferred.resolve({ status: "success", match: result })
		})

		return deferred.promise;
	}


	function updateTeam(){
		
	}


	/* end of all function ............ */


