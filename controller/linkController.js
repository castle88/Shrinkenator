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

const postLink = async (req, res, next) => {
	const { url, name } = req.body
	try{
		console.log(`url: ${url}\nname: ${name}`)
		res.status(201).json({
			success: true,
			message: 'youve pinged the post route'
		})

	}catch(err){
		res.status(400)
		next(err)
	}
}

module.exports = { getLink, postLink }