const q = require('q')
const mongoose = require('mongoose')
module.exports =  {
		team		:  require('./team.model')(mongoose, q),
		player	:  require('./player.model')(mongoose, q),
		match		:  require('./match.model')(mongoose, q)

}