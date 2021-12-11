const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
  
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("author", authorSchema); // users
