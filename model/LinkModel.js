const mongoose = require('mongoose')

const LinkSchema = mongoose.Schema({
	url: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	}
})

const Link = mongoose.model('Link', LinkSchema)

module.exports = Link