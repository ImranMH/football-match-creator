//const mongoose = require('mongoose');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
    //ObjectId = Schema.ObjectId;
 
const MatchSchema = new Schema({
    matchNo 	: Number,
    teamOne: { 
        name: { type: Schema.Types.ObjectId, ref: "Team" },
        score: Number,
        conceded: Number,
        point: Number
    },
    teamTwo: { 
        name: { type: Schema.Types.ObjectId, ref: "Team" },
        score: Number,
        conceded: Number,
        point: Number
     },
    winner    : {
        name: { type: Schema.Types.ObjectId, ref: "Team" },
        score: Number,
        point: Number
    },
    looser    :{
        name: { type: Schema.Types.ObjectId, ref: "Team" },
        score: Number,
        point: Number
    },
    drow 		: {type:Boolean, default: false},
    winScore     : Number,
    loseScore     : Number,
    scorer      : [{
        player: {type: Schema.Types.ObjectId, ref: "PlayerModel"},
        scoringTime: String
                }],
    group      : String,
    finished : Boolean,
    playDate : Date,
    playTime : String,
    stadium : String
	});


//const MatchModel = mongoose.model('MatchModel', MatchSchema);
module.exports = MatchSchema

