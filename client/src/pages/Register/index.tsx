import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import "./styles.css";

export function CreateRegister(){
    const [Data, setData] = useState("");
    const [Type, setType] = useState(""); //entrada ou saída
    const [form, setForm] = useState("");
    const [desc, setDesc] = useState("");
    const [value, setValue]= useState("");
    const navigate = useNavigate();

    const handleBill = (event: React.FormEvent) => {
        event.preventDefault();
    }
    
    const handleGoToRegister = () => {
        navigate("/bill");
    }

    //teste .js
    return (
        <div className="bill-container">
          <div className="bill-top"> </div> {/* hud em cima*/}
          <div className="bill-center"></div>
        </div>
      );
};