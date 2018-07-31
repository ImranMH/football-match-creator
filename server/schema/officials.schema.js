//const mongoose = require('mongoose');

const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
const OfficialSchema = new Schema({
    userId    :{type: Schema.Types.ObjectId, ref: "OfficialModel"},
    name     : String,
    age      : Number,
    team: { type: Schema.Types.ObjectId, ref: "Team"},
    designation      : String,
    country      : String,
    avater      : String,
	});

module.exports = OfficialSchema
//const PlayerModel = mongoose.model('PlayerModel', OfficialSchema);

