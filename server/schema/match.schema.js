//const mongoose = require('mongoose');
module.exports = function( mongoose) {
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
const MatchSchema = new Schema({
		matchNo 	: Number,
    winner    : {type: Schema.Types.ObjectId, ref: "TeamModel"},
    looser    :{type: Schema.Types.ObjectId, ref: "TeamModel"},
    drow 		: {type:Boolean, default: false},
    winScore     : Number,
    loseScore     : Number,
    scorer      : [{type: Schema.Types.ObjectId, ref: "PlayerModel"}],
    group      : String,
    playingdate : Date,
    stadium : String
	});


//const MatchModel = mongoose.model('MatchModel', MatchSchema);


return MatchSchema;
}