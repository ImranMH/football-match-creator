const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3001;
const ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
const app = express()



// mongoDB conncetion using mongoose ......................
  /* Database Stuff................................*/
  const database = require('./config/database')(mongoose);
  

//..........................................end DB*/

app.use(express.json())

app.use( express.static(__dirname + '/../client/build'));

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/apis/test', (req, res) => res.json({name:'imran', from:'express'}))
app.post('/apis/test', (req, res) => {
	var data = req.body;
	console.log(data);
	res.json(data)
})

app.listen(port, () => console.log('Example app listening on port 3000!'))