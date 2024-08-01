// src/components/AddShoe.js
import React, { useState } from 'react';
import { addShoe } from '../api';


const AddShoe = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newShoe = {
      name,
      brand,
      price,
      size,
      color,
      quantity
    };
    try {
      await addShoe(newShoe);
      alert('Shoe added successfully');
      // Clear the form
      setName('');
      setBrand('');
      setPrice('');
      setSize('');
      setColor('');
      setQuantity('');
    } catch (error) {
      console.error('Error adding shoe', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Shoe</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Brand:
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Size:
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Color:
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Add Shoe</button>
    </form>
  );
};

export default AddShoe;
