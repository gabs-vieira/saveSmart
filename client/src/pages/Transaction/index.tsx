import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import { api } from "../../services/api"; // API para pegar transações
import "./styles.css"; // Estilos personalizados

interface Transaction {
  id: number;
  date: string;
  value: number;
  description: string;
}

export function Transaction() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);

  useEffect(() => {
    // Simulação de uma chamada de API
    const fetchTransactions = async () => {
      try {
        const response = await api.get("/transactions"); // Substituir pelo endpoint real
        setTransactions(response.data);
      } catch (error) {
        console.error("Erro ao carregar transações:", error);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    // Calcula o total somando os valores das transações
    const calculateTotal = () => {
      const total = transactions.reduce(
        (sum, transaction) => sum + transaction.value,
        0
      );
      setTotalValue(total);
    };

    calculateTotal();
  }, [transactions]);

  const handleLogout = () => {
    console.log("Usuário deslogado");
    // Redirecionar ou limpar sessão
  };

  const handleAddTransaction = () => {
    console.log("Abrir modal de adicionar transação");
  };

  const handleFilterTransactions = () => {
    console.log("Abrir opções de filtro");
  };

  return (
    <div className="transactions-container">
      {/* Cabeçalho */}
      <header className="header">
        <Typography variant="h5" className="header-title">
          SaveSmart
        </Typography>
        <Typography variant="h6" className="header-balance">
          Total: R$ {totalValue.toFixed(2)}
        </Typography>
        <IconButton onClick={handleLogout} className="logout-button">
          <LogoutIcon />
        </IconButton>
      </header>

      {/* <div className="actions">
        <Button
          variant="contained"
          color="primary"
          startIcon={<FilterListIcon />}
          onClick={handleFilterTransactions}
        >
          Filtro
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={handleAddTransaction}
        >
          Adicionar
        </Button>
      </div>

      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Descrição</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>R$ {transaction.value.toFixed(2)}</TableCell>
                <TableCell>{transaction.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
}
