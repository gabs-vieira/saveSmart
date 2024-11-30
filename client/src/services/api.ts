import axios from 'axios'
import { userData, loginData } from '../types/user';

// const token = localStorage.getItem("authToken")

export const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    // headers: token ? {Authorization: `Bearer ${token}`} : {}
});


export const login = async (loginData: loginData) => {

    axios.post('http://localhost:8000/api/login/', {
        username: loginData.username,
        password: loginData.password
      })
      .then(response => {
        const {access, refresh } = response.data
        localStorage.setItem("accessToken", access)
        localStorage.setItem("refreshToken", refresh)
        console.log(response.data);
        return response.data

      })
      .catch(error => {
        console.error('Erro na requisição:', error.response || error.message);
      });
    
}

//Create user
export const createUser = async (userData: userData) => {

    try{
        const response = await api.post("users/", userData);
        return response.data;
    }catch(error){
        console.error("Error creating user:", error.response?.data || error.message);
    }
}

// Get all users
export const fetchUsers = async () => {
    
    try{
        const response = await api.get("users/");
        return response.data;
    }catch (error){
        console.error("Error when searching for users", error.response?.data || error.message);
        throw error;
    }
}

// // Update User
// const updateUser = async (id: number, userData: userData) => {
//     const response = await api.put(`users/${id}/`, userData);
//     return response.data;
// };

// //Delete User
// const deleteUser = async (id: number) => {
//     const response = await api.delete(`users/${id}/`);
//     return response.data;
//   };