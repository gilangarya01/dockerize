const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { connectToDB } = require("./config/db");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Database connection
connectToDB().then((db) => {
  app.use((req, res, next) => {
    req.db = db;
    next();
  });

  // Routes
  app.use("/", adminRoutes);

  // Start server
  const PORT = 8090;
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
});
