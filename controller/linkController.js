const Link = require('../model/LinkModel')

const getLink = async (req, res, next) => {
	try{
		res.status(200).json({
			success: true,
			message: 'get the link'
		})
	}catch(err){
		res.status(400)
		next(err)
	}
}

module.exports = { getLink, }