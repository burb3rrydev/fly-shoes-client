// src/components/ListShoes.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllShoes, deleteShoe } from '../api';

const ListShoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await getAllShoes();
        setShoes(response.data);
      } catch (error) {
        console.error('Error fetching shoes', error);
      }
    };

    fetchShoes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteShoe(id);
      setShoes(shoes.filter(shoe => shoe.id !== id));
      alert('Shoe deleted successfully');
    } catch (error) {
      console.error('Error deleting shoe', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Shoes</h2>
      <div className="row">
        {shoes.map(shoe => (
          <div className="col-md-4 mb-3" key={shoe.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{shoe.name}</h5>
                <p className="card-text">
                  <strong>Brand:</strong> {shoe.brand} <br />
                  <strong>Price:</strong> ${shoe.price} <br />
                  <strong>Size:</strong> {shoe.size} <br />
                  <strong>Color:</strong> {shoe.color} <br />
                  <strong>Quantity:</strong> {shoe.quantity}
                </p>
                <Link to={`/shoe/${shoe.id}`} className="btn btn-primary me-2">
                  View Details
                </Link>
                <button 
                  onClick={() => handleDelete(shoe.id)} 
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListShoes;
