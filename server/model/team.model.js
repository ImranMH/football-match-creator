const q = require('q')
const mongoose = require('mongoose')


	// const TeamSchema = require('../schema/t.s')(mongoose);

const TeamSchema = require('../schema/team.schema');
const Team = mongoose.model('Team', TeamSchema);

let api = {
	getTeamById,
	getTeam,
	createTeam,
	updateTeam,
	deteteTeamById,
	findTeamsByNames,
	findTeamsByName,
	// findByIds,
	deletePlayerById,
	updateTeamOneMatchResult,
	updateTeamTwoMatchResult,
	addPlayer
}

	module.exports = api

	function getTeamById(team) {
		var deferred = q.defer();
		Team.findById(team).populate('players').populate('matches').exec(function (err, user){
				if (err) {
					deferred.reject(err)
				}
				deferred.resolve(user)

		})
		return deferred.promise;
	}
	/*  find match */
	/* i deactivate this function and forget why i create it. it just create bug for me */
/* 	function findByIds(match) {
		return Team
			.find({ '_id': { $in: [match.teamOne.id, match.teamTwo.id] } })
			.then(function ( teams) {
				teams.forEach(team => {
					team.matches.push(match._id)
				 	team.save()
				})
			})
	} */


/*  find match */
// function findByIds(match) {
// 	var deferred = q.defer();
// 	Team.find({ '_id': { $in: [match.teamOne, match.teamTwo] } }, function (err, teams) {

// 		if (err) {
// 			deferred.reject(err)
// 		}
// 		teams.forEach(team => {
// 			team.matches.push(match._id)
// 			team.save((err, res) => {
// 				if (err) {
// 					deferred.reject(err)
// 				}
// 				console.log('successfully save')
// 				console.log(team)
// 			})
// 		})
// 		//deferred.resolve(teams)

// 	})
// 	return deferred.promise;
// }
	/*........................................... get team*/
	/*get movie json data*/
	function getTeam() {
		var deferred = q.defer();
		Team.find({}).populate('players').sort('-goalDiff').exec(function(err,item){
			if(err){
				deferred.reject(err)
			}
			console.log('all team generate here')
			deferred.resolve(item)
		})
		return deferred.promise;
	}
		/*create a team from ombd apis..............................*/
	async function createTeam(newTeamData) {
		var deferred = q.defer();								
		var newTeam = new Team({							
			title: newTeamData.title,
			continent: newTeamData.continent,
			group: newTeamData.group,
			flag: newTeamData.flag,
			ranking: newTeamData.ranking,
			appearence: newTeamData.appearence,						
		})
		newTeam.save(function(err, data){
			if (err) {
				deferred.reject(err)
			} else {
				deferred.resolve(data)
			}
		})	
		return deferred.promise;
	}
			/*create a team from ombd apis..............................*/
/*	async function createTeam(newTeamData) {
			var deferred = q.defer();
			Team.findOne({'title': newTeamData.title}, function(err, link){
				if(err){
					
					deferred.reject(err)
				} else if(link) {						
						deferred.reject({msg:'link already exist', link:link})
				}else {
												
					var newTeam = new Team({							
						title: newTeamData.title,
						continent: newTeamData.continent,
						group: newTeamData.group,
						flag: newTeamData.flag,
						ranking: newTeamData.ranking,
						appearence: newTeamData.appearence,						
					})
					newTeam.save(function(err, data){
						if (err) {
							deferred.reject(err)
						} else {
							deferred.resolve(data)
						}
					})
				}
			})
		
		return deferred.promise;
	}*/


	function updateTeam(teamId, data) {	
		return Team
			.findById(teamId)
			.then(team => {
				for (var field in Team.schema.paths) {
					if ((field !== '_id') && (field !== '__v')) {

						if (data[field] !== undefined) {
							team[field] = data[field];
						}
					}
				}
				return team.save()
			})
			.catch(err => {
				console.log(err);
			})
	}
	// function updateTeam(teamId, data) {
	// 	var deferred = q.defer();
	// 	Team.findById(teamId, function (err, team) {
	// 		if (err) {
	// 			deferred.reject(err)
	// 		} else {
	// 			//update fields
	// 			for (var field in Team.schema.paths) {
	// 				if ((field !== '_id') && (field !== '__v')) {

	// 					if (data[field] !== undefined) {
	// 						team[field] = data[field];
	// 					}
	// 				}
	// 			}

	// 		}
	// 		team.save();
	// 		console.log('database updated...');
	// 		console.log(team);
	// 		deferred.resolve(team)
	// 	})
	// 	return deferred.promise;
	// }
	function deteteTeamById(id) {
		var status = {}
		var deferred = q.defer()
		Team.findById(id, function (err, team) {
			if (err) {
				deferred.reject(err)
			} else {
				team.remove(function (err, team) {
					if (err) {
						deferred.reject(err);
					} else {
						status.msg = 'team Successfully deleted';
						status.update = true;
						deferred.resolve(status);
					}
				});

			}
		})
		return deferred.promise;
	};
function deletePlayerById(id,player) {
	console.log(id)
	console.log(player)
	return	Team
		.findByIdAndUpdate(id, { $pull: { 'players': player}})
		
	}
/* for create match teams participent ........................*/
	function findTeamsByNames(n1,n2) {
		var status = {}
		var deferred = q.defer()
		Team.find({ title: { "$in": [n1, n2] }}, function (err, team) {
			if (err) {
				deferred.reject(err)
			} else {
				deferred.resolve(team)

			}
		})
		return deferred.promise;
	}

	/* for add ing new player............. */
	/* first find team name from database............. */
	function findTeamsByName(name) {
		var deferred = q.defer()
		Team.findOne({ title: name }, function (err, team) {
			if (err) {
				deferred.reject(err)
			} else {
				deferred.resolve(team._id)

			}
		})
		return deferred.promise;
	}

	/* add player */
	function addPlayer(team,playerId) {

		var deferred = q.defer()
		Team.findById(team._id, function (err, team) {
			if (err) {
				deferred.reject(err)
			} else {
				team.players.push(playerId);
				team.save((err, result)=>{
					if (err) {
						deferred.reject(err)
					}
					deferred.resolve(result)
				})
			}
		})
		return deferred.promise;
	}

	/* update team after a match play  ...............................*/
function updateTeamOneMatchResult(matchDetail) {

	return Team.findById(matchDetail.teamOne.id)
		.then(function ( team) {
			if (team.matches.indexOf(matchDetail._id) === -1) {
				team.opponents.push(matchDetail.teamTwo.id);
				team.play = team.play + 1,
				team.goalFor = team.goalFor + matchDetail.teamOne.score
				team.goalAganist = team.goalAganist + matchDetail.teamOne.conceded
				team.goalDiff = team.goalFor - team.goalAganist
				if (matchDetail.teamOne.point === 3) {
					team.win = team.win + 1
					team.point = team.point + 3
					team.resultSummer.push('w')
				} else if (matchDetail.teamOne.point === 1) {
					team.draw = team.draw + 1
					team.point = team.point + 1
					team.resultSummer.push('d')
				} else {
					team.lost = team.lost + 1
					team.point = team.point + 0
					team.resultSummer.push('l')
				}

				team.matches.push(matchDetail._id);
			 return	team.save()
			}
		})

	}




	/* update team after a match play  ...............................*/
function updateTeamTwoMatchResult(matchDetail) {

	return Team.findById(matchDetail.teamTwo.id)
		.then(function (team) {
		console.log(team);
   if (team.matches.indexOf(matchDetail._id) == -1) {
			team.opponents.push(matchDetail.teamOne.id);
			team.play = team.play + 1,
			team.goalFor = team.goalFor + matchDetail.teamTwo.score
			team.goalAganist = team.goalAganist + matchDetail.teamTwo.conceded
			team.goalDiff = team.goalFor - team.goalAganist
		  team.matches.push(matchDetail._id);
			if (matchDetail.teamTwo.point === 3) {
				team.win = team.win + 1
				team.point = team.point + 3
				team.resultSummer.push('w')
			} else if (matchDetail.teamTwo.point === 1) {
				team.draw = team.draw + 1
				team.point = team.point + 1
				team.resultSummer.push('d')
			} else {
				team.lost = team.lost + 1
				team.point = team.point + 0
				team.resultSummer.push('l')
			}
			return  team.save()
		}
	})
}


/* update team after a match play  ...............................*/
/* function updateTeamTwoMatchResult(matchDetail) {
	console.log(" 2")
	var deferred = q.defer()
	console.log(matchDetail);
	Team.findById(matchDetail.teamTwo.id, function (err, team) {
		console.log(team);
		if (err) {
			deferred.reject(err)
		} else if (team.matches.indexOf(matchDetail._id) === -1) {
			console.log('here i am in team two')
			console.log(team);
			team.opponents.push(matchDetail.teamOne.id);
			team.play = team.play + 1,
				team.goalFor = team.goalFor + matchDetail.teamTwo.score
			team.goalAganist = team.goalAganist + matchDetail.teamTwo.conceded
			team.goalDiff = team.goalFor - team.goalAganist
			if (matchDetail.teamTwo.point === 3) {
				team.win = team.win + 1
				team.point = team.point + 3
				team.resultSummer.push('w')
			} else if (matchDetail.teamTwo.point === 1) {
				team.draw = team.draw + 1
				team.point = team.point + 1
				team.resultSummer.push('d')
			} else {
				team.lost = team.lost + 1
				team.point = team.point + 0
				team.resultSummer.push('l')
			}
			team.matches.push(matchDetail._id);
			team.save((err, result) => {
				if (err) {
					deferred.reject(err)
				}
				console.log('team two save function');
				console.log(result);
				deferred.resolve(result)
			})
		}
	})
	return deferred.promise;
} */
// function editPlayer(teamId, playerId) {
// 	Team.findById(teamId )
// 		.then(team=>{
// 			if (team.players.indexOf(playerId) == -1){
// 				team.players.push(playerId)
// 				team.save()
// 			}

// 		})

// }




