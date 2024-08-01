// src/components/DeleteShoe.js
import React, { useState } from 'react';
import { deleteShoe } from '../api';

const DeleteShoe = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await deleteShoe(id);
      alert('Shoe deleted successfully');
      setId(''); // Clear the input field
    } catch (error) {
      console.error('Error deleting shoe', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delete Shoe</h2>
      <label>
        Shoe ID:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Delete Shoe</button>
    </form>
  );
};

export default DeleteShoe;
