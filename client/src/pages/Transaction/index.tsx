import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Autocomplete,
  DialogContent,
  DialogTitle,
  DialogActions,
  Dialog,
} from "@mui/material";
import AddOutlined from "@mui/icons-material/AddOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import { api } from "../../services/api";
import "./styles.css";
import { TransactionData } from "../../types/user.ts";
import { DatePicker } from "@mui/x-date-pickers";
import { Navigate, useNavigate } from "react-router-dom";

const paymentTypeOptions = [
  { key: "entrada", label: "Entrada" },
  { key: "saida", label: "Saida" },
];

const currencyFormatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function Transaction() {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulação de uma chamada de API
    const fetchTransactions = async () => {
      try {
        const response = await api.get("/transactions");
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
    navigate("/");
    // Redirecionar ou limpar sessão
  };

  const handleAddTransaction = () => {
    // console.log("Abrir modal de adicionar transação");
  };

  const handleFilterTransactions = () => {
    // console.log("Abrir opções de filtro");
  };

  return (
    <main>
      {/* Cabeçalho */}
      <header className="header">
        <Typography fontWeight={700} variant="h5" className="header-title">
          SaveSmart
        </Typography>
        {/* <Typography variant="h6" className="header-balance">
          Total: R$ {totalValue.toFixed(2)}
        </Typography> */}
        <Tooltip title="Sair" arrow placement="left">
          <div>
            <IconButton onClick={handleLogout} className="logout-button">
              <LogoutIcon sx={{ color: "#fff" }} />
            </IconButton>
          </div>
        </Tooltip>
      </header>

      <div className="transaction-container">
        <div>
          <Accordion
            defaultExpanded
            sx={{ borderRadius: 4, overflow: "hidden" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Filtros
            </AccordionSummary>
            <AccordionDetails style={{ display: "flex", gap: 40 }}>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <Typography>Valor:</Typography>
                <TextField size="small" type="number" defaultValue={0} />
                <Typography>até</Typography>
                <TextField size="small" type="number" defaultValue={0} />
              </div>

              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <Typography>Data:</Typography>
                <DatePicker
                  label="Basic date picker"
                  slotProps={{ textField: { size: "small" } }}
                  sx={{ maxWidth: 200 }}
                />
                <Typography>até</Typography>
                <DatePicker
                  label="Basic date picker"
                  slotProps={{ textField: { size: "small" } }}
                  sx={{ maxWidth: 200 }}
                />
              </div>

              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <Typography>Tipo:</Typography>
                <Autocomplete
                  options={paymentTypeOptions}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ maxWidth: 200, width: "100%" }}
                      size="small"
                    />
                  )}
                  getOptionLabel={(option) => option.label}
                  isOptionEqualToValue={(option, value) =>
                    option.key === value.key
                  }
                />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <Paper sx={{ padding: 2 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" className="header-balance">
              Total: R$ {totalValue.toFixed(2)}
            </Typography>

            <div>
              <Button
                size="small"
                startIcon={<AddOutlined />}
                variant="contained"
                onClick={() => setIsDialogOpen(true)}
              >
                Adicionar
              </Button>
            </div>
          </div>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Data</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Método Pagamento</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions?.length ? (
                transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      {new Date(transaction.data).toLocaleDateString("pt-BR")}
                    </TableCell>
                    <TableCell>
                      {currencyFormatter.format(transaction.value)}
                    </TableCell>
                    <TableCell>{transaction.desc}</TableCell>
                    <TableCell>
                      {transaction.type ? "Entrada" : "Saída"}
                    </TableCell>
                    <TableCell>{transaction.method}</TableCell>
                    <TableCell>{transaction.method}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6}>
                    <Typography
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      Nenhuma transação foi cadastrada
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </div>

      <Dialog
        open={isDialogOpen}
        maxWidth="lg"
        fullWidth
        onClose={() => setIsDialogOpen(false)}
      >
        <DialogTitle>Adicionar Nova Transação</DialogTitle>
        <DialogContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              paddingTop: 4,
            }}
          >
            <Autocomplete
              options={paymentTypeOptions}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ maxWidth: 400, width: "100%" }}
                  label="Método"
                />
              )}
              getOptionLabel={(option) => option.label}
              isOptionEqualToValue={(option, value) => option.key === value.key}
            />
            <TextField label="Método de Pagamento" />
            <TextField label="Value" />
            <DatePicker label="Data" />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="outlined"
            type="submit"
            onClick={() => setIsDialogOpen(false)}
          >
            Cancelar
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
