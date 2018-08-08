
	// const q = require('q')
	const mongoose = require('mongoose')
const q = require('q')
	// const PlayerModel = require('../schema/p.s')(mongoose)
	const PlayerSchema = require('../schema/player.schema')

	const PlayerModel = mongoose.model('PlayerModel', PlayerSchema);

	let api = {
		addPlayer,
		updateTeam,
		allPlayer,
		getPlayerById,
		editPlayerById,
		deletePlayerById
}
	module.exports = api

	/*apis functtions ......................*/
	function addPlayer(player, teamId){
		var newplayer = new PlayerModel({		
			name: player.name,
			club: player.club,
			clubOrigin: player.clubOrigin,
			jersey: player.jersey,
			age: player.age,
			country: teamId,
			position: player.position,
			image: player.image,
			goal: player.goal
		})
		return	newplayer.save()
	}
	function allPlayer(){
		
		return PlayerModel
		.find()
		.populate('country')
		.sort('name')
		.exec()
	}
	function getPlayerById(id){
		return PlayerModel
			.findById(id)
			.populate('country')
			.exec()
	}
function editPlayerById(playerId, data) {
	return PlayerModel
		.findById(playerId)
		.then(player=>{
			for (var field in PlayerModel.schema.paths) {
				if ((field !== '_id') && (field !== '__v')) {

					if (data[field] !== undefined) {
						player[field] = data[field];
					}
				}
			}
		return	player.save()
		})
		.catch(err=>{
			console.log(err);
		})
	}
// function editPlayerById(playerId, data) {
// 	var deferred = q.defer();
// 	console.log(data);
// 	PlayerModel.findById(playerId, function (err, player) {
// 		if (err) {
// 			deferred.reject(err)
// 		} else {
// 			//update fields
// 			for (var field in PlayerModel.schema.paths) {
// 				if ((field !== '_id') && (field !== '__v')) {

// 					if (data[field] !== undefined) {
// 						player[field] = data[field];
// 					}
// 				}
// 			}

// 		}
// 		player.save();
// 		deferred.resolve(player)
// 	})
// 	return deferred.promise;
// }
	function deletePlayerById(id){
		return PlayerModel
			.findByIdAndDelete(id)
	}
	function updateTeam(){
		
	}

