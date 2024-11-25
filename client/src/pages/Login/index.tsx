import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { login } from "../../services/api";  // Importe a função de login
import "./styles.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  // Adiciona um estado para mensagens de erro
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Chama a função de login do serviço
      const data = await login(email, password);

      // Se o login for bem-sucedido, armazene o token no localStorage
      localStorage.setItem("authToken", data.access_token);

      // Redireciona o usuário para a página principal ou para onde você desejar
      navigate("/dashboard");  // Exemplo de redirecionamento
    } catch (error) {
      // Em caso de erro, exibe uma mensagem de erro para o usuário
      setErrorMessage("Credenciais inválidas. Tente novamente.");
    }
  };

  const handleGoToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <div className="login-left"></div> {/* Área vazia à esquerda */}
      <div className="login-right">
        <h1 className="login-title">SaveSmart</h1>
        <h2 className="login-subtitle">Login</h2>

        {/* Exibe a mensagem de erro, se houver */}
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}

        <form onSubmit={handleLogin} className="login-form">
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Senha"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Entrar
          </Button>
        </form>

        <Typography
          variant="body2"
          className="login-register-text"
          onClick={handleGoToRegister}
        >
          Não tem conta?{" "}
          <span className="register-link">Clique aqui para fazer cadastro</span>
        </Typography>
      </div>
    </div>
  );
};