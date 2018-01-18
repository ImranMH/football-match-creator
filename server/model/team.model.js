module.exports = function(mongoose, q) {

const TeamSchema = require('../schema/team.schema')(mongoose);

const TeamModel = mongoose.model('Team', TeamSchema);
}


