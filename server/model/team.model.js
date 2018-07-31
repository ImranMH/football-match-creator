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
	findByIds,
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
	function findByIds(match) {
		var deferred = q.defer();
		Team.find({ '_id': { $in: [match.teamOne, match.teamTwo] } }, function (err, teams) {

			if (err) {
				deferred.reject(err)
			}
			teams.forEach(team=>{
				team.matches.push(match._id)
				team.save((err, res)=>{
					if(err){
						deferred.reject(err)
					}
					console.log('successfully save')
					console.log(team)
				})
			})
			//deferred.resolve(teams)

		})
		return deferred.promise;
	}
	/*........................................... get team*/
	/*get movie json data*/
	function getTeam() {
		var deferred = q.defer();
		Team.find({}).populate('players').exec(function(err,item){
			if(err){
				deferred.reject(err)
			}
			console.log('all team generate here')
			deferred.resolve(item)
		})
		// Team.find({},(err,user)=>{
		// if(err){
		// 	deferred.reject(err)
		// 	}
		// 	deferred.resolve(user)
		// })
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
		var deferred = q.defer();	
		Team.findById(teamId, function(err, team){
			if(err) {
				deferred.reject(err)
			} 
			team.continent = data.continent,
			team.flag = data.flag,
			team.group = data.group,
			team.ranking = data.ranking,
			team.title = data.title,

				team.save(function (err, data) {
					if (err) {
						deferred.reject(err)
					} else {
						console.log('database updated...');
						console.log(data);
						deferred.resolve(data)
					}
				});

		})
		return deferred.promise;
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
/* for create match teams */
	function findTeamsByNames(n1,n2) {
		console.log('team model find by names')
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
				deferred.resolve(team)

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




