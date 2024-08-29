// Import module
const express = require("express");
const { ObjectId } = require("mongodb");

// Initialize router
const router = express.Router();

// Home page
router.get("/", async (req, res) => {
  const db = req.db;
  let users = await db.collection("users").find().toArray();
  res.render("index.ejs", { users });
});

// Add page
router.get("/add", (req, res) => res.render("add.ejs"));

// Add user
router.post("/add", (req, res) => {
  const db = req.db;
  const newUser = {
    name: req.body.name,
    hobby: req.body.hobby,
  };

  db.collection("users")
    .insertOne(newUser)
    .then(() => res.redirect("/"))
    .catch((err) => console.log("Err : " + err));
});

// Delete user
router.get("/delete/:id", (req, res) => {
  const db = req.db;
  const userId = req.params.id;

  db.collection("users")
    .deleteOne({ _id: new ObjectId(userId) })
    .then(() => res.redirect("/"))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Edit page
router.get("/edit/:id", (req, res) => {
  const db = req.db;
  const userId = req.params.id;

  db.collection("users")
    .findOne({ _id: new ObjectId(userId) })
    .then((user) => {
      res.render("edit.ejs", { user });
    });
});

// Edit user
router.post("/edit/:id", (req, res) => {
  const db = req.db;
  const userId = req.params.id;

  const editUser = {
    name: req.body.name,
    hobby: req.body.hobby,
  };

  db.collection("users")
    .updateOne({ _id: new ObjectId(userId) }, { $set: editUser })
    .then(() => res.redirect("/"));
});

module.exports = router;
