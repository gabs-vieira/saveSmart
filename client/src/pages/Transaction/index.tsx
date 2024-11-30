import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Ícone para o botão de sair
import { api } from "../../services/api"; // API para pegar transações
import "./styles.css"; // CSS com a estilização

// Definindo um tipo para transações
interface Transaction {
  id: number;
  date: string;
  amount: number;
  paymentMethod: string;
  description: string;
  type: "entrada" | "saída";
}

export function Transaction() {
  const [transactions, setTransactions] = useState<Transaction[]>([]); // Tipo das transações
  const [balance, setBalance] = useState<number>(0);

  // Função para buscar transações da API
  const fetchTransactions = async () => {
    try {
      const response = await api.get("transactions/"); // Endpoint da sua API
      setTransactions(response.data);
    } catch (error) {
      console.error("Erro ao carregar transações:", error);
    }
  };

  // Função para calcular o saldo
  const calculateBalance = (transactions: Transaction[]) => {
    return transactions.reduce((total, transaction) => {
      if (transaction.type === "entrada") {
        return total + transaction.amount; // Entrada
      }
      return total - transaction.amount; // Saída
    }, 0);
  };

  // Chama a função ao carregar o componente
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Calcula o saldo sempre que as transações mudarem
  useEffect(() => {
    setBalance(calculateBalance(transactions));
  }, [transactions]);

  const handleLogout = () => {
    // Lógica de logout (pode ser para limpar sessão, redirecionar, etc.)
    console.log("Saindo...");
  };

  return (
    <div className="transactions-container">
      {/* Cabeçalho */}
      <header className="header">
        {/* Botão de Sair (vermelho) */}
        <IconButton className="logout-button" onClick={handleLogout}>
          <ExitToAppIcon fontSize="large" />
        </IconButton>

        {/* Saldo centralizado */}
        <div className="balance-container">
          <Typography variant="h5" className="header-balance">
            R$ {balance.toFixed(2)}
          </Typography>
        </div>

        {/* Ícone de perfil no canto direito */}
        <IconButton className="profile-icon">
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </header>

      {/* Tabela de Transações */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-header">Data</TableCell>
              <TableCell className="table-header">Valor</TableCell>
              <TableCell className="table-header">Forma de Pagamento</TableCell>
              <TableCell className="table-header">Descrição</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>R$ {transaction.amount.toFixed(2)}</TableCell>
                <TableCell>{transaction.paymentMethod}</TableCell>
                <TableCell>{transaction.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
