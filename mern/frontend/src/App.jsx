import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";

function App() {
  return (
    // Router component provides routing functionality
    <Router>
      <Routes>
        {/* Route to render the item list on the root path */}
        <Route path="/" element={<ItemList />} />

        {/* Route to render the add item form */}
        <Route path="/add" element={<AddItem />} />

        {/* Route to render the edit item form, with an ID parameter */}
        <Route path="/edit/:id" element={<EditItem />} />
      </Routes>
    </Router>
  );
}

export default App;
