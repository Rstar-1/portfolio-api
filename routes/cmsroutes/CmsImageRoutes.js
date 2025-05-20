const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/cmsimageadddata",
    fileUpload("picture", false),
    //  fileUpload([
    //    { name: "cmsdata1", maxCount: 1 },
    //    { name: "cmsdata2", maxCount: 1 },
    // ]
    uploadToCloud(),
    Controller.CmsImageController.cmsimageadddata
  );
  app.get("/cmsimagegetdata", Controller.CmsImageController.cmsimagegetdata);
  app.post(
    "/cmsimagepaginationdata",
    Controller.CmsImageController.cmsimagepaginationdata
  );
  app.get(
    "/cmsimagesingledata/:id",
    Controller.CmsImageController.cmsimagesingledata
  );
  app.patch(
    "/cmsimageupdatedata/:id",
    fileUpload("picture", false),
    //  fileUpload([
    //    { name: "cmsdata1", maxCount: 1 },
    //    { name: "cmsdata2", maxCount: 1 },
    // ]
    uploadToCloud(),
    Controller.CmsImageController.cmsimageupdatedata
  );
  app.patch(
    "/cmsimagestatusdata/:id",
    Controller.CmsImageController.cmsimagestatusdata
  );
  app.delete(
    "/cmsimagedeletedata/:id",
    Controller.CmsImageController.cmsimagedeletedata
  );
};
