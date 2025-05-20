const cmstext = require("../../models/cms/CmsTextSchema");

// Cmstext add
exports.cmstextadddata = async (req, res) => {
  const { sectionid, sectionname, cmsdata } = req.body;
  try {
    const adduser = new cmstext({
      sectionid,
      sectionname,
      cmsdata,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "cmstextadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Cmstext all data
exports.cmstextgetdata = async (req, res) => {
  try {
    const userdata = await cmstext.find();
    res.status(201).json(userdata);

    // console.log(userdata, "cmstextalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Cmstext pagination all data
exports.cmstextpaginationdata = async (req, res) => {
  try {
    const { offset, search } = req.body;
    const searchObject = {};

    if (search) {
      Object.assign(searchObject, {
        cmsdata: {
          $regex: `${search.toString().trim()}`,
          $options: "i",
        },
      });
    }
    const cmsstore = await cmstext.find(searchObject).skip(offset).limit(6);
    const totalCount = await cmstext.countDocuments(searchObject);
    res.json({ cmsstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cmstext single data
exports.cmstextsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await cmstext.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "cmstextsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Cmstext update data
exports.cmstextupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await cmstext.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    //console.log(updateduser, "cmstextupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Cmstext delete data
exports.cmstextdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await cmstext.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "cmstextdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
