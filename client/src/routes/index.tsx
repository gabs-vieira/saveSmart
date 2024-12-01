import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { CreateUser } from "../pages/CreateUser";
import { Authentication } from "./Authentication";
import { Transaction } from "../pages/Transaction";

// npm add react-router-dom

export const AppRouter = () => {
  return (
    <Authentication>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<CreateUser />} />
          <Route path="/" element={<Login />} />
          <Route path="/transaction" element={<Transaction />} />
          {/* <Route path="/users" element={<User />} /> */}
        </Routes>
      </BrowserRouter>
    </Authentication>
  );
};
