import axios from 'axios'
import { userData } from '../types/user';

export const api = axios.create({
    baseURL: 'http://localhost:8000/api/' // URL da sua API Django
});


//Create user
const createUser = async (userData: userData) => {
    const response = await api.post("users/", userData);
    return response.data;
}

// Get all users
const fetchUser = async () => {
    const response = await api.get("users/");
    return response.data;
}

// Update User
const updateUser = async (id: number, userData: userData) => {
    const response = await api.put(`users/${id}/`, userData);
    return response.data;
};

//Delete User
const deleteUser = async (id: number) => {
    const response = await api.delete(`users/${id}/`);
    return response.data;
  };