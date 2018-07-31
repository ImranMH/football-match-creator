//const mongoose = require('mongoose');
module.exports = function (mongoose) {

  const Schema = mongoose.Schema;
  //ObjectId = Schema.ObjectId;

  const PlayerSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "TeamModel" },
    name: String,
    age: Number,
    club: String,
    clubOrigin: String,
    jersey: String,
    country: {
      type: Schema.Types.ObjectId,
      ref: "TeamModel"
    },
    position: String,
    image: String,
    goal: Number,
  });


  const PlayerModel = mongoose.model('PlayerModel', PlayerSchema);


  return PlayerModel;
}