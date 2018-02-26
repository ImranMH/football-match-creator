module.exports = function(mongoose, q) {

const TeamSchema = require('../schema/team.schema')(mongoose);

const TeamModel = mongoose.model('Team', TeamSchema);
let api = {
	getTeamById,
	getTeam,
	createTeam,
	updateTeam,
	deteteTeamById
}
return api;

	/*apis functtions ......................*/
	// async function getTeamById(data,callback){
	// 		const fakedata = [
	// 			{name:'Brazil',continent:"South America", rank: 1},
	// 			{name:'Iran',continent:"Asia", rank: 31},
	// 			{name:'Spain',continent:"Europe", rank: 3}
	// 	]
	// 	fakedata.push(data)
	// 	callback(fakedata)
	// }
	function getTeamById(id) {
		var deferred = q.defer();

		TeamModel.findById(id, (err, user) => {
			if (err) {
				deferred.reject(err)
			}
			deferred.resolve(user)
		})
		return deferred.promise;
	}
	/*........................................... get team*/
	/*get movie json data*/
	function getTeam() {
		var deferred = q.defer();
		// TeamModel.find({}).sort({ "_id":-1 }).populate('players').exec(function(err,item){
		// 	if(err){
		// 		deferred.reject(err)
		// 	}
		// 	console.log(item)
		// 	deferred.resolve(item)
		// })
		TeamModel.find({},(err,user)=>{
		if(err){
			deferred.reject(err)
			}
			deferred.resolve(user)
		})
		return deferred.promise;
	}
		/*create a team from ombd apis..............................*/
	async function createTeam(newTeamData) {
		var deferred = q.defer();								
		var newTeam = new TeamModel({							
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
			TeamModel.findOne({'title': newTeamData.title}, function(err, link){
				if(err){
					
					deferred.reject(err)
				} else if(link) {						
						deferred.reject({msg:'link already exist', link:link})
				}else {
												
					var newTeam = new TeamModel({							
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
		TeamModel.findById(teamId, function(err, team){
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
	// 	TeamModel.findById(teamId, function (err, team) {
	// 		if (err) {
	// 			deferred.reject(err)
	// 		} else {
	// 			//update fields
	// 			for (var field in TeamModel.schema.paths) {
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
		TeamModel.findById(id, function (err, team) {
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


}


