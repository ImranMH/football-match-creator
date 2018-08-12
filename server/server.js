const express = require('express');
const mongoose = require('mongoose');
const q = require('q')
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3001;
const ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
const app = express()

/* local resourec calling ...............................*/
//model 
	
 

	

// mongoDB conncetion using mongoose ......................
  /* Database Stuff................................*/
  const database = require('./config/database')(mongoose);
  // mongoose.Promise = q;
// var Player = require('./model/player.model');
// var Team = require('./model/team.model');
// var Match = require('./model/match.model');


//routes
const team = require('./routes/team.ctrl')(express)
const player = require('./routes/player.ctrl')(express)
const match = require('./routes/match.ctrl')(express)
//..................middleware function ........................*/

app.use(express.json())

app.use( express.static(__dirname + '/../client/build'));

process.on('warning', (warning) => {
  console.log(warning.stack);
});
//..................end of middleware function ........................*/

/* Route middleware setup ..............................................*/
app.use('/api/team',team)
app.use('/api/player',player)
app.use('/api/match',match)
/*.................................... End of Route middleware................................*/
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/apis/test', (req, res) => res.json({name:'imran', from:'express'}))
app.post('/apis/test', (req, res) => {
	const {user} = req.body;
	console.log(user);
})

app.listen(port, () => console.log('Example app listening on port 3001!'))