const mongoose = require("mongoose");

// Tags Mongoose => Post and Tags are in a many to many relationship
const tagSchema = new mongoose.Schema(
  {
    book_name: { type: String, required: true },
  
  body: { type: String, required:false },
    section_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "section",
      required: false,
    },
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
    checkout_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "checkout",
      required: false,
    },
  },
  
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("tag", tagSchema); // tags collection
