import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/api"; // Importando a função para criar usuário

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
      const response = await createUser({
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
    <div className="register-container" style={{ padding: "20px", width: "300px", margin: "0 auto" }}>
      <Typography variant="h5" gutterBottom>
        Cadastro
      </Typography>
      <form onSubmit={handleRegister}>
        <TextField
          label="Nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        {error && (
          <Typography variant="body2" color="error" style={{ marginTop: "10px" }}>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }}>
          Registrar
        </Button>
      </form>

      <Typography
        variant="body2"
        style={{ marginTop: "10px", cursor: "pointer", textAlign: "center" }}
        onClick={() => navigate("/login")}
      >
        Já tem uma conta? Faça login.
      </Typography>
    </div>
  );
}