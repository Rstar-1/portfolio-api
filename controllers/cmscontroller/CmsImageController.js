const cmsimageService = require("../../services/cmsservice/CmsImageService");

exports.cmsimageadddata = async function (req, res) {
  try {
    var users = await cmsimageService.cmsimageadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.cmsimagegetdata = async function (req, res) {
  try {
    var users = await cmsimageService.cmsimagegetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.cmsimagepaginationdata = async function (req, res) {
  try {
    var users = await cmsimageService.cmsimagepaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.cmsimagesingledata = async function (req, res) {
  try {
    var users = await cmsimageService.cmsimagesingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.cmsimageupdatedata = async function (req, res) {
  try {
    var users = await cmsimageService.cmsimageupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.cmsimagestatusdata = async function (req, res) {
  try {
    var users = await cmsimageService.cmsimagestatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.cmsimagedeletedata = async function (req, res) {
  try {
    var users = await cmsimageService.cmsimagedeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
