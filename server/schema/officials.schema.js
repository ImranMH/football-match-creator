//const mongoose = require('mongoose');
module.exports = function( mongoose) {

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
const OfficialSchema = new Schema({
    userId    :{type: Schema.Types.ObjectId, ref: "OfficialModel"},
    name     : String,
    age      : Number,
    team      : {type: Schema.Types.ObjectId, ref: "TeamModel"},
    designation      : String,
    country      : String
    avater      : String,
	});


//const PlayerModel = mongoose.model('PlayerModel', OfficialSchema);


return  OfficialSchema;
}