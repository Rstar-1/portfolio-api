const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/cmstextadddata", Controller.CmsTextController.cmstextadddata);
  app.get("/cmstextgetdata", Controller.CmsTextController.cmstextgetdata);
  app.post(
    "/cmstextpaginationdata",
    Controller.CmsTextController.cmstextpaginationdata
  );
  app.get(
    "/cmstextsingledata/:id",
    Controller.CmsTextController.cmstextsingledata
  );
  app.patch(
    "/cmstextupdatedata/:id",
    Controller.CmsTextController.cmstextupdatedata
  );
  app.delete(
    "/cmstextdeletedata/:id",
    Controller.CmsTextController.cmstextdeletedata
  );
};
