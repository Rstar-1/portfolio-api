const cmsimage = require("../../models/cms/CmsImageSchema");

// CmsImage add
exports.cmsimageadddata = async (req, res) => {
  const { sectionid, sectionname } = req.body;
  try {
    const adduser = new cmsimage({
      sectionid,
      sectionname,
      cmsdata: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "cmsimageadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// CmsImage all data
exports.cmsimagegetdata = async (req, res) => {
  try {
    const userdata = await cmsimage.find();
    res.status(201).json(userdata);

    // console.log(userdata, "cmsimagealldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// CmsImage pagination all data
exports.cmsimagepaginationdata = async (req, res) => {
  try {
    const { offset, search } = req.body;
    const searchObject = {};

    if (search) {
      Object.assign(searchObject, {
        sectionname: {
          $regex: `${search.toString().trim()}`,
          $options: "i",
        },
      });
    }
    const cmsstore = await cmsimage.find(searchObject).skip(offset).limit(6);
    const totalCount = await cmsimage.countDocuments(searchObject);
    res.json({ cmsstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CmsImage single data
exports.cmsimagesingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await cmsimage.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "cmsimagesingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// CmsImage update data
exports.cmsimageupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await cmsimage.findByIdAndUpdate(
      id,
      {
        sectionid: req.body.sectionid,
        sectionname: req.body.sectionname,
        cmsdata: req.body.picture,
      },
      {
        new: true,
      }
    );

    //console.log(updateduser, "cmsimageupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// CmsImage status update data
exports.cmsimagestatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await cmsimage.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "cmsimagestatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// CmsImage delete data
exports.cmsimagedeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await cmsimage.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "cmsimagedeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
