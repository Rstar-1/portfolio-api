const express = require("express");
const router = express.Router();

// ----------------------------- CMS ----------------------------- //
const CmsTextRoute = require("./cmsroutes/CmsTextRoutes");
const CmsImagetRoute = require("./cmsroutes/CmsImageRoutes");
// ----------------------------- CMS ----------------------------- //

module.exports = function(app) {
 app.use("/api", router)
 CmsTextRoute(router);
 CmsImagetRoute(router);
}
