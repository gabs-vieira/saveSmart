import axios from 'axios'
import { userData } from '../types/user';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // URL do Django
});

// Funções de API
const createUser = async (userData: userData) => {
  const response = await api.post("users/", userData);
  return response.data;
}

const login = async (email: string, password: string) => {
  const response = await api.post("/login/", { username: email, password }); // Envia o email e senha
  return response.data;  // Retorna a resposta, que deve conter o token de acesso
};

// Função para buscar usuários
const fetchUser = async () => {
  const response = await api.get("users/");
  return response.data;
}

// Função para atualizar usuário
const updateUser = async (id: number, userData: userData) => {
  const response = await api.put(`users/${id}/`, userData);
  return response.data;
};

// Função para deletar usuário
const deleteUser = async (id: number) => {
  const response = await api.delete(`users/${id}/`);
  return response.data;
};

// Exportando as funções
export { createUser, login, fetchUser, updateUser, deleteUser };