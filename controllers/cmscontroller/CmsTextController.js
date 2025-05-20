const cmstextService = require("../../services/cmsservice/CmsTextService");

exports.cmstextadddata = async function (req, res) {
  try {
    var users = await cmstextService.cmstextadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.cmstextgetdata = async function (req, res) {
  try {
    var users = await cmstextService.cmstextgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.cmstextpaginationdata = async function (req, res) {
  try {
    var users = await cmstextService.cmstextpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.cmstextsingledata = async function (req, res) {
  try {
    var users = await cmstextService.cmstextsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.cmstextupdatedata = async function (req, res) {
  try {
    var users = await cmstextService.cmstextupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.cmstextdeletedata = async function (req, res) {
  try {
    var users = await cmstextService.cmstextdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
