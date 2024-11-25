import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { CreateUser } from "../pages/CreateUser";
import { Authentication } from "./Authentication";

// npm add react-router-dom

export const AppRouter = () => {
    return (
        <Authentication>
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<CreateUser />} />
                    <Route path="*" element={<Login />} />
                    {/* <Route path="/users" element={<User />} /> */}
                </Routes>
            </BrowserRouter>
        </Authentication>
    )
}