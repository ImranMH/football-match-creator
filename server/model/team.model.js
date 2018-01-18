module.exports = function(mongoose, q) {

const TeamSchema = require('../schema/team.schema')(mongoose);

const TeamModel = mongoose.model('Team', TeamSchema);
let api = {
	addTeam,
	getTeam,
	createTeam,
	updateTeam
}
return api;

	/*apis functtions ......................*/
	async function addTeam(data,callback){
			const fakedata = [
				{name:'Brazil',continent:"South America", rank: 1},
				{name:'Iran',continent:"Asia", rank: 31},
				{name:'Spain',continent:"Europe", rank: 3}
		]
		fakedata.push(data)
		callback(fakedata)
	}

	/*........................................... get team*/
	/*get movie json data*/
	function getTeam() {
		var deferred = q.defer();
		TeamModel.find({}).sort({ "_id":-1 }).populate('players').exec(function(err,item){
			if(err){
				deferred.reject(err)
			}
		
			deferred.resolve(item)
		})
		return deferred.promise;
	}
		/*create a team from ombd apis..............................*/
	async function createTeam(newTeamData) {

			TeamModel.findOne({'name': newTeamData.name}, function(err, link){
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
	}
	function updateTeam(){
		
	}

	function EditWeblink(teamId, data) {

		TeamModel.findById(teamId, function(err, team){
			if(err) {
				deferred.reject(err)
			} else {
			  //update fields
        for (var field in TeamModel.schema.paths) {
           if ((field !== '_id') && (field !== '__v')) {

              if (data[field] !== undefined) {
                 team[field] = data[field];
              }  
           }  
        }  
        team.save();
     	//console.log(weblink);
     	deferred.resolve(team)
			}
		})
		return deferred.promise;
	}




}


