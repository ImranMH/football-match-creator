module.exports = (mongoose,q) => {
	let model = {
		team		:  require('./team.model')(mongoose, q),
		player	:  require('./player.model')(mongoose, q),
		match		:  require('./match.model')(mongoose, q)
	}
	return model
}