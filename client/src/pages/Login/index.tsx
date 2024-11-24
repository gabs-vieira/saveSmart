import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import "./styles.css";

interface GithubResponse {
  id: number;
  bio: string;
  login: string;
}

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSaveUser = () => {
    // TODO: save
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
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
