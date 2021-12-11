const mongoose = require("mongoose");

// Comment Mongoose => Post and comment are one to many relationship
const sectionSchema = new mongoose.Schema(
  {
    section_name: {type : String, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("section", sectionSchema); // comments collection
