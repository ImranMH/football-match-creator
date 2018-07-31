var dbDev = 'fifa2018';
var dbPro = 'fifa2018';
var dbUser = 'movieGossip';
var dbPassword = 'imran2020';
const development = 'mongodb://127.0.0.1:27017/'+dbDev;
const production = 'mongodb://'+dbUser+':'+dbPassword+'@ds139817.mlab.com:39817/'+dbPro;
// const options = {
//   server: { poolSize: 1 }
// }
// optional options no need to use
const options = {
  useNewUrlParser: true ,
  // autoIndex: false, // Don't build indexes
  // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  // reconnectInterval: 500, // Reconnect every 500ms
  // poolSize: 10, // Maintain up to 10 socket connections
  // // If not connected, return errors immediately rather than waiting for reconnect
  // bufferMaxEntries: 0
};

module.exports = (mongoose) => {
	

	var connectingString = development

  if (process.env.OPENSHIFT_MONGODB_DB_URL) {
       connectingString = process.env.OPENSHIFT_MONGODB_DB_URL
  }
   if (process.env.port) {
       connectingString = production
  }
  mongoose.connect(connectingString, options);
 // mongoose.connect(connectingString, configDB.options);
  var db = mongoose.connection;
  mongoose.set("debug", true)
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    // we're connected!
    console.log('database now connected!!!!');

  });

}











//..........................................  old 
/*var dbDev = 'fifa2018';
var dbPro = 'angularJs-chat';
var dbUser = 'movieGossip';
var dbPassword = 'imran2020';


module.exports = {
	development : 'mongodb://127.0.0.1:27017/'+dbDev,
	production: 'mongodb://'+dbUser+':'+dbPassword+'@ds139817.mlab.com:39817/'+dbPro,
	options : {
	  server: { poolSize: 1 }
	}	
}
*/


/*
/*  var connectingString = configDB.development
  console.log(connectingString);
  if (process.env.OPENSHIFT_MONGODB_DB_URL) {
       connectingString = process.env.OPENSHIFT_MONGODB_DB_URL
  }
   if (process.env.port) {
       connectingString =configDB.production
  }
  mongoose.connect(connectingString);
 // mongoose.connect(connectingString, configDB.options);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    // we're connected!
    console.log('database now connected!!!!');

  });
  db.on('connect', function () {
      console.log('database hit')
  })
*/