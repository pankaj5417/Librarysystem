const express = require("express");

const usersController = require("./controllers/user.controller");
const checkoutController = require("./controllers/checkout.controller");
const bookController = require("./controllers/book.controller");
const sectonController = require("./controllers/section.controller");
const authorController=require("./controllers/author.controller")

const app = express();

app.use(express.json());

app.use("/books", bookController);
app.use("/sections", sectonController);
app.use("/users", usersController);
app.use("/checkouts", checkoutController);
app.use("/authors",authorController)

module.exports = app;
