const mongoose = require("mongoose");

const cmstextSchema = new mongoose.Schema(
  {
    sectionid: {
      type: String,
      required: true,
    },
    sectionname: {
      type: String,
      required: true,
    },
    cmsdata: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// model cmstext
const cmstext = new mongoose.model("cmstext", cmstextSchema);
module.exports = cmstext;
