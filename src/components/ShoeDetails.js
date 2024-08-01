// src/components/ShoeDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShoeById } from '../api';

const ShoeDetails = () => {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    const fetchShoe = async () => {
      try {
        const response = await getShoeById(id);
        setShoe(response.data[0]); // Assuming the response is an array with one item
      } catch (error) {
        console.error('Error fetching shoe', error);
      }
    };

    fetchShoe();
  }, [id]);

  if (!shoe) return <p>Loading...</p>;

  return (
    <div>
      <h2>Shoe Details</h2>
      <p><strong>ID:</strong> {shoe.id}</p>
      <p><strong>Name:</strong> {shoe.name}</p>
      <p><strong>Brand:</strong> {shoe.brand}</p>
      <p><strong>Price:</strong> ${shoe.price}</p>
      <p><strong>Size:</strong> {shoe.size}</p>
      <p><strong>Color:</strong> {shoe.color}</p>
      <p><strong>Quantity:</strong> {shoe.quantity}</p>
    </div>
  );
};

export default ShoeDetails;
