module.exports = function(mongoose, q) {

const MatchSchema = require('../schema/match.schema')(mongoose)

const MatchModel = mongoose.model('Match', MatchSchema);
let api = {
	addTeam,
	updateTeam,
}
return api;

	/*apis functtions ......................*/
	function addTeam(){

	}
	function updateTeam(){
		
	}
}

