const express = require("express");

const Checkout = require("../models/CheckOut");
const Book = require("../models/Books");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController.post(Checkout));
router.get("", crudController.getAll(Checkout));
router.get("/:id", crudController.getOne(Checkout));

router.patch("/:id", async (req, res) => {
  try {
    const tag = await Checkout.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(tag);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tag = await Checkout.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(tag);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/:id/books", async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id).lean().exec();
    const book = await Book.find({ checkout_id: checkout._id })
      .populate("checkout_id")
      .lean()
      .exec();

    return res.status(200).send({ book,checkout });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
