import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

// Base URL for the API endpoint
const API_URL = "http://0.0.0.0:3000/api/items";

function EditItem() {
  // State to store the item data
  const [item, setItem] = useState({ _id: null, nama: "" });

  // State to store error messages
  const [error, setError] = useState("");

  // Extract the item ID from route parameters
  const { id } = useParams();

  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Fetch the item details when the component mounts
  useEffect(() => {
    fetchItem();
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to fetch item data from the API
  const fetchItem = async () => {
    try {
      // Get the list of items from the API
      const response = await axios.get(API_URL);

      // Find the item with the matching ID
      const fetchedItem = response.data.find((item) => item._id === id);

      // Update state with the fetched item data
      setItem(fetchedItem || { _id: null, nama: "" });
    } catch (error) {
      // Set error message if the request fails
      setError("Failed to fetch data");
    }
  };

  // Function to update the item data
  const updateItem = async () => {
    try {
      // Send a PUT request to update the item
      await axios.put(`${API_URL}/${id}`, { nama: item.nama });

      // Navigate back to the home page on successful update
      navigate("/");
    } catch (error) {
      // Set error message if the request fails
      setError("Failed to update data");
    }
  };

  return (
    <div>
      <h1>Edit Item</h1>

      {/* Display error message if any */}
      {error && <p>{error}</p>}

      {/* Input field for editing the item name */}
      <input
        type="text"
        value={item.nama}
        onChange={(e) => setItem({ ...item, nama: e.target.value })} // Update item state with input value
      />

      {/* Button to trigger item update */}
      <button onClick={updateItem}>Update</button>
    </div>
  );
}

export default EditItem;
