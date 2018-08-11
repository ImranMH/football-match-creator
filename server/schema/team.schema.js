//const mongoose = require('mongoose');
// var PlayerModel = require('./player.schema')

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
   // ObjectId = Schema.ObjectId;
 
const TeamSchema = new Schema({
    ranking   : Number ,
    title     : {type:String, lowercase: true},
    continent      : String,
    flag      : String,
    appearence      : Number,
    players: [{ type: Schema.Types.ObjectId, ref: 'PlayerModel'}],
    matches: [{ type: Schema.Types.ObjectId, ref: 'MatchModel' }],
    group      : {type:String, uppercase: true},
    standing      : Number,
    resultSummer      : [String],
    point: { type: Number, default: 0 },
    goalFor      : { type: Number, default: 0 },
    goalAganist      : { type: Number, default: 0 },
    goalDiff      : { type: Number, default: 0 },
    play      : { type: Number, default: 0 },
    win      : { type: Number, default: 0 },
    draw      : { type: Number, default: 0 },
    lost      : { type: Number, default: 0 },
    opponent      :{type: Schema.Types.ObjectId, ref: "TeamModel"},
    opponents      :[{type: Schema.Types.ObjectId, ref: "TeamModel"}],
    status      : String,
	});

module.exports = TeamSchema
    // const TeamModel = mongoose.model('Team', TeamSchema);
     


