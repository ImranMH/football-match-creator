//const mongoose = require('mongoose');
// var PlayrModel = require('./p.s')
module.exports = function (mongoose) {
  const Schema = mongoose.Schema;
  // ObjectId = Schema.ObjectId;

  const TeamSchema = new Schema({
    ranking: Number,
    title: { type: String, lowercase: true },
    continent: String,
    flag: String,
    appearence: Number,
    players: [{ type: Schema.Types.ObjectId, ref: 'PlayerModel' }],
    matches: [{ type: Schema.Types.ObjectId, ref: 'MatchModel' }],
    group: { type: String, uppercase: true },
    standing: Number,
    resultSummer: [String],
    point: Number,
    goalFor: Number,
    goalAganist: Number,
    goalDiff: Number,
    play: Number,
    win: Number,
    draw: Number,
    lost: Number,
    // opponent: { type: Schema.Types.ObjectId, ref: "TeamModel" },
    // opponents: [{ type: Schema.Types.ObjectId, ref: "TeamModel" }],
    status: String,
  });


  const TeamModel = mongoose.model('Team', TeamSchema);



  return TeamModel;
}