// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListShoes from './components/ListShoes';
import AddShoe from './components/AddShoe';
import ShoeDetails from './components/ShoeDetails';
import DeleteShoe from './components/DeleteShoe';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ListShoes />} />
            <Route path="/add-shoe" element={<AddShoe />} />
            <Route path="/shoe/:id" element={<ShoeDetails />} />
            <Route path="/delete-shoe" element={<DeleteShoe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
