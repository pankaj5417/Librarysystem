const express = require("express");

const Author = require("../models/Author");
const Book=require("../models/Books")

const crudController = require("./crud.controller");

const router = express.Router();

// USERS CRUD
router.post("", crudController.post(Author));
router.get("", crudController.getAll(Author));
router.get("/:id", crudController.getOne(Author));

router.get("/:id/books", async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).lean().exec();
      const book = await Book.find({ author_id: author._id })
        .populate("author_id")
        .lean()
        .exec();
  
      return res.status(200).send({ book,author });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
router.patch("/:id", crudController.updateOne(Author));
router.delete("/:id", crudController.deleteOne(Author));

module.exports = router;
