const Link = require('../model/LinkModel')

const getLink = async (req, res, next) => {
	const id = req.params.id
	try{
		const link = await Link.findOne({id})
		console.log(link)
	}catch(err){
		console.log(err)
	}
}

module.exports = { getLink }