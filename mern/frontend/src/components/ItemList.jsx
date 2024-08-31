import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Base URL for the API endpoint
const API_URL = "http://0.0.0.0:3000/api/items";

function ItemList() {
  // State to store the list of items
  const [items, setItems] = useState([]);

  // State to store error messages
  const [error, setError] = useState("");

  // Fetch items when the component mounts
  useEffect(() => {
    fetchItems();
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to fetch items from the API
  const fetchItems = async () => {
    try {
      // Send a GET request to retrieve items
      const response = await axios.get(API_URL);

      // Update state with the retrieved items
      setItems(response.data);
    } catch (error) {
      // Set error message if the request fails
      setError("Failed to fetch data");
    }
  };

  // Function to delete an item by ID
  const deleteItem = async (id) => {
    try {
      // Send a DELETE request to remove the item
      await axios.delete(`${API_URL}/${id}`);

      // Update state to remove the deleted item from the list
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      // Set error message if the request fails
      setError("Failed to delete data");
    }
  };

  return (
    <div>
      <h1>Item List</h1>

      {/* Display error message if any */}
      {error && <p>{error}</p>}

      {/* Link to add a new item */}
      <Link to="/add">Add Item</Link>

      <ul>
        {/* Render the list of items */}
        {items.map((item) => (
          <li key={item._id}>
            {item.nama} - {/* Button to delete an item */}
            <button onClick={() => deleteItem(item._id)}>Delete</button>
            {/* Link to edit an item */}
            <Link to={`/edit/${item._id}`}>
              <button>Edit</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
