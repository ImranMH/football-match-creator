//const mongoose = require('mongoose');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
    //ObjectId = Schema.ObjectId;
 
const MatchSchema = new Schema({
    matchNo 	: Number,
    teamOne: { type: Schema.Types.ObjectId, ref: "Team" },
    teamTwo: { type: Schema.Types.ObjectId, ref: "Team" },
    winner    : {type: Schema.Types.ObjectId, ref: "Team"},
    looser    :{type: Schema.Types.ObjectId, ref: "Team"},
    drow 		: {type:Boolean, default: false},
    winScore     : Number,
    loseScore     : Number,
    scorer      : [{type: Schema.Types.ObjectId, ref: "PlayerModel"}],
    group      : String,
    finished : Boolean,
    playDate : Date,
    playTime : String,
    stadium : String
	});


//const MatchModel = mongoose.model('MatchModel', MatchSchema);
module.exports = MatchSchema

