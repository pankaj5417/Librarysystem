const mongoose = require("mongoose");

// Post Mongoose
const checkoutSchema = new mongoose.Schema(
  {
    checkoutval:{type:String,required:false},
    checkout: { type: Boolean, required: false },
   
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("checkout", checkoutSchema); // posts collection
