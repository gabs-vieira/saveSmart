import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { fetchUsers, login } from "../../services/api";
import { loginData } from "../../types/user.ts";
import "./styles.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSaveUser = async () => {
    const users = await fetchUsers();
    setUsers(users);
    // TODO: save
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    if (await login(data)) {
      navigate("/transaction");
    } else {
      console.error("Erro no login: Tokens não encontrados.");
    }
  };

  const handleGoToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="container">
      <div className="login-left"></div> {/* Área vazia à esquerda */}
      <div className="login-right">
        <h1 className="title">SaveSmart</h1>
        <h2 className="login-subtitle">Login</h2>

        <form onSubmit={handleLogin} className="login-form">
          <TextField
            label="Username"
            type="email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />
          <TextField
            label="Senha"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </form>

        {/* <Button
          variant="outlined"
          color="secondary"
          fullWidth
          style={{ marginTop: "10px" }}
          onClick={handleSaveUser}
        >
          Mostrar Usuários (GET)
        </Button> */}

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
