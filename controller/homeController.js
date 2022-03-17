const getHome = (req, res, next) => {
	res.render('home.ejs')
}

module.exports = { getHome }