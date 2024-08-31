import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Base URL for the API endpoint
const API_URL = "http://0.0.0.0:3000/api/items";

function AddItem() {
  // State to store the new item's name
  const [newItem, setNewItem] = useState("");

  // State to store error messages
  const [error, setError] = useState("");

  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Function to handle the item addition
  const addItem = async () => {
    if (!newItem) return; // Do nothing if the new item name is empty
    try {
      // Send a POST request to the API to add a new item
      await axios.post(API_URL, { nama: newItem });

      // Navigate back to the home page on successful addition
      navigate("/");
    } catch (error) {
      // Set error message if the request fails
      setError("Failed to add item");
    }
  };

  return (
    <div>
      <h1>Add Item</h1>

      {/* Display error message if any */}
      {error && <p>{error}</p>}

      {/* Input field for the new item name */}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} // Update state with input value
      />

      {/* Button to trigger item addition */}
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default AddItem;
