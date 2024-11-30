import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import "./styles.css"; // Importando o novo CSS

export function CreateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    // Limpa o erro caso haja um de tentativa anterior
    setError("");

    try {
      // Chama a API para criar o usuário
      await api.createUser({
        username,
        email,
        password,
      });

      // Se o cadastro for bem-sucedido, redireciona para a tela de login
      navigate("/login");
    } catch (error) {
      // Exibe mensagem de erro em caso de falha
      setError("Erro ao criar conta. Tente novamente.");
      console.error("Erro ao registrar:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <Typography className="register-title" variant="h4">
          Cadastro
        </Typography>
        <Typography className="register-subtitle" variant="body1">
          Preencha as informações abaixo para criar sua conta.
        </Typography>
        <form className="register-form" onSubmit={handleRegister}>
          <TextField
            label="Nome de Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            variant="outlined"
          />
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary">
            Registrar
          </Button>
        </form>
        <Typography
          className="register-login-text"
          onClick={() => navigate("/login")}
        >
          Já tem uma conta?{" "}
          <span className="login-link">Faça login</span>
        </Typography>
      </div>
      <div className="register-right"></div>
    </div>
  );
}
