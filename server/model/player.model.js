
module.exports = function(mongoose) {

const PlayerSchema = require('../schema/player.schema')(mongoose)

const PlayerModel = mongoose.model('Player', PlayerSchema);

}