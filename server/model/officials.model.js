
module.exports = function(mongoose) {

const OfficialSchema = require('../schema/player.schema')(mongoose)

const OfficialModel = mongoose.model('official', OfficialSchema);

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