// Import require module
const express = require("express");
const bodyParser = require("body-parser");
const { connectToDB } = require("./config/db");
const adminRoutes = require("./routes/admin");

// Initialize express
const app = express();
// Set view engine
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
