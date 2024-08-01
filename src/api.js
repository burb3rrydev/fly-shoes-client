// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/shoes';

export const getAllShoes = () => axios.get(API_URL);
export const getShoeById = (id) => axios.get(`${API_URL}/${id}`);
export const addShoe = (shoe) => axios.post(API_URL, shoe);
export const updateShoe = (id, shoe) => axios.put(`${API_URL}/${id}`, shoe);
export const deleteShoe = (id) => axios.delete(`${API_URL}/${id}`);
