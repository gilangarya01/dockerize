const express = require("express");
const { ObjectId } = require("mongodb");

// Initialize the Express router
const router = express.Router();

// Read: Get all items
router.get("/items", async (req, res) => {
  try {
    const db = req.db; // Retrieve the database connection from the request object
    const items = await db.collection("items").find().toArray(); // Fetch all items from the "items" collection
    res.status(200).json(items); // Respond with the items in JSON format
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve items" }); // Handle errors and respond with an appropriate message
  }
});

// Store a new item
router.post("/items", async (req, res) => {
  try {
    const db = req.db; // Retrieve the database connection from the request object
    const newItem = { nama: req.body.nama }; // Create a new item object from the request body
    await db.collection("items").insertOne(newItem); // Insert the new item into the "items" collection
    res.status(201).send(newItem); // Respond with the created item and a 201 status
  } catch (error) {
    res.status(500).json({ error: "Failed to store item" }); // Handle errors and respond with an appropriate message
  }
});

// Delete an item by ID
router.delete("/items/:id", async (req, res) => {
  const { id } = req.params; // Extract the item ID from the route parameters

  try {
    const db = req.db; // Retrieve the database connection from the request object
    await db.collection("items").deleteOne({ _id: new ObjectId(id) }); // Delete the item with the specified ID from the "items" collection
    res.sendStatus(200); // Respond with a 200 status indicating successful deletion
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item" }); // Handle errors and respond with an appropriate message
  }
});

// Update an item by ID
router.put("/items/:id", async (req, res) => {
  const { id } = req.params; // Extract the item ID from the route parameters
  const editItem = {
    nama: req.body.nama, // Create an object with updated item data from the request body
  };

  try {
    const db = req.db; // Retrieve the database connection from the request object
    const result = await db.collection("items").findOneAndUpdate(
      { _id: new ObjectId(id) }, // Find the item by ID
      { $set: editItem }, // Update the item with new data
      { returnOriginal: false } // Return the updated item
    );
    res.status(200).json(result.value); // Respond with the updated item
  } catch (error) {
    console.error("Error updating item:", error); // Log error details for debugging
    res.status(500).json({ error: "Failed to update item" }); // Handle errors and respond with an appropriate message
  }
});

module.exports = router; // Export the router to be used in other parts of the application
