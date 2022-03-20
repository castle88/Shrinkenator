const Link = require("../model/LinkModel");

const getLink = async (req, res, next) => {
  const id = req.params.id;
  try {
    const url = await Link.findOne({ name: id });

    if (!url.url) {
      res.status(404);
      return next(new Error(`Could not find ${id}`));
    } else {
      res.status(200).json({
        success: true,
        message: "get the link",
        crushedLink: url,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    next(err);
  }
};

const postLink = async (req, res, next) => {
  const { url, name } = req.body;
  try {
    console.log(`url: ${url}\nname: ${name}`);
    const link = await Link.findOne({ url });

    if (!link) {
      const crushedLink = await Link.create({
        url,
        name,
      });

      res.status(201).json({
        success: true,
        message: "youve pinged the post route",
        crushedLink,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "link has already been crushed, heres the crushed link below",
        crushedLink: link,
      });
    }
  } catch (err) {
    res.status(400);
    next(err);
  }
};

module.exports = { getLink, postLink };
