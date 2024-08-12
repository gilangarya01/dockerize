const express = require("express");
const { ObjectId } = require("mongodb");

const router = express.Router();

router.get("/", async (req, res) => {
  const db = req.db;
  let users = await db.collection("users").find().toArray();
  res.render("index.ejs", { users });
});

router.get("/add", (req, res) => res.render("add.ejs"));
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

module.exports = router;
