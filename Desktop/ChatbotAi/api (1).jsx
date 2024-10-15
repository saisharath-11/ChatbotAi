// src/api.js
import axios from 'axios';

// Base URL for JSONPlaceholder API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// API to get all clients (using posts as an example)
export const getClients = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`); // Fetch users instead of clients
    return response.data; // Return only the data from the response
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error; // Propagate the error to be handled by the calling function
  }
};

// API to get client details by name
export const getClientWithName = async (name) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`); // Fetch all users
    const client = response.data.find(user => user.name.toLowerCase() === name.toLowerCase());
    return client || null; // Return the client or null if not found
  } catch (error) {
    console.error(`Error fetching client with name ${name}:`, error);
    throw error;
  }
};

// API to get address by client ID
export const getAddressForClientById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`); // Fetch user by ID
    return response.data.address; // Return the address of the user
  } catch (error) {
    console.error(`Error fetching address for client ID ${id}:`, error);
    throw error;
  }
};

// API to get address by client name
export const getAddressForClientByName = async (name) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`); // Fetch all users
    const client = response.data.find(user => user.name.toLowerCase() === name.toLowerCase());
    return client ? client.address : null; // Return the address or null if not found
  } catch (error) {
    console.error(`Error fetching address for client name ${name}:`, error);
    throw error;
  }
};