const express = require("express");

const Section = require("../models/Section");
const Book=require("../models/Books")

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController.post(Section));
router.get("", crudController.getAll(Section));
//router.get("/:id", crudController.getOne(Section));


router.get("/:id/books", async (req, res) => {
  try {
    const section = await Section.findById(req.params.id).lean().exec();
    const book = await Book.find({ section_id: section._id })
      .populate("section_id")
      .lean()
      .exec();

    return res.status(200).send({ book,section });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


router.patch("/:id", async (req, res) => {
  try {
    const Section = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.send(Section);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const Section = await Section.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.send(Section);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
