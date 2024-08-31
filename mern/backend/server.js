// Import modules
const express = require("express");
const cors = require("cors");

// Import configuration
const { connectToDB } = require("./config/db");

// Initialize Express application
const app = express();
const PORT = 3000;

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Import route handlers
const itemRoutes = require("./routes/items");

// Establish database connection
connectToDB().then((db) => {
  // Middleware to attach the database connection to each request
  app.use((req, res, next) => {
    req.db = db; // Add database connection to request object
    next(); // Pass control to the next middleware
  });

  // Register routes
  app.use("/api", itemRoutes); // Mount item routes at /api endpoint

  // Start the server
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });
});
