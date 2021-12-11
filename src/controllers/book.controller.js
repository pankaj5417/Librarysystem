const express = require("express");

const Book = require("../models/Books");
const Section = require("../models/Section");


const crudController = require("./crud.controller");

const router = express.Router();

// /posts "/:id" get
router.post("", crudController.post(Book));

router.get(
  "/",
  crudController.getAllWithTwoPopulate(
    Book,Section,
    { path: "author_id", select: "first_name" },
    { path: "checkout_id",select:"checkoutval" },
    { path: "section_id" }
  )
);

// router.get("", async (req, res) => {
//   try {
//     const posts = await Book.find()
//       .populate({ path: "user_id", select: "first_name" })
//       .populate("tag_ids")
//       .lean()
//       .exec();

//     return res.send(posts);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

// router.get("/:id", crudController.getOne(Book));

router.patch("/:id", async (req, res) => {
  try {
    const post = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.send(post);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Book.findByIdAndDelete(req.params.id).lean().exec();

    return res.send(post);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
