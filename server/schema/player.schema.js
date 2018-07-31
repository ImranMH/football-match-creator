//const mongoose = require('mongoose');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
    //ObjectId = Schema.ObjectId;
 
const PlayerSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "Team"},
    name     : String,
    age      : Number,
    club      : String,
    clubOrigin      : String,
    jersey      : String,
    country: {
        type: Schema.Types.ObjectId,
        ref: "Team"
    },
    position      : String,
    image      : String,
    goal      : Number,
	});

module.exports = PlayerSchema
//const PlayerModel = mongoose.model('PlayerModel', PlayerSchema);


