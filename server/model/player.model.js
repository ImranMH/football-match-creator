
	const q = require('q')
	const mongoose = require('mongoose')

	// const PlayerModel = require('../schema/p.s')(mongoose)
	const PlayerSchema = require('../schema/player.schema')

	const PlayerModel = mongoose.model('PlayerModel', PlayerSchema);

	let api = {
		addPlayer,
		updateTeam,
		allPlayer
}
	module.exports = api

	/*apis functtions ......................*/
	function addPlayer(player, team){
		var deferred = q.defer();
		var newplayer = new PlayerModel({		
			name: player.name,
			club: player.club,
			clubOrigin: player.clubOrigin,
			jersey: player.jersey,
			age: player.age,
			country: team._id,
			position: player.position,
			image: player.image,
			goal: player.goal
		})
		newplayer.save(function (err, result) {
			if (err) {
				deferred.reject(err)
			}
			deferred.resolve(result)
		})

		return deferred.promise;
	}
	function allPlayer(){
		var deferred = q.defer();
		PlayerModel.find()
		.populate('country')
		.exec((err, res) => {
			if (err) {
				deferred.reject(err)
			}
			console.log(res)

			deferred.resolve(res)
		})

		return deferred.promise;
	}
	function updateTeam(){
		
	}

