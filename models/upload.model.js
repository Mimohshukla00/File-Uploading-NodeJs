const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    tags: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const Upload = mongoose.model("Upload", uploadSchema);
module.exports = Upload;
