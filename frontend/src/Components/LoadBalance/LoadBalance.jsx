import React, { useState} from 'react'
import {cards} from '../../data/cards' 
import {addTransaction} from '../../data/transactions' 
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from '../Navbar/Navbar'
import { useLocation } from "react-router-dom";
import Select from '@mui/material/Select';
import { paymentMethods } from "../../data/payment_methods";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import GenericSnackbar from "../Snackbar/GenericSnackbar";

export default function LoadBalance() {

const [amount, setAmount] = useState(0);
const location = useLocation();
const idCard = location.state?.cardId;

const [isLoading, setIsLoading] = useState(false);

const [loadingScreen, setLoadingScreen] = useState({
    message: "",
    duration: null,
});

const [snackbar, setSnackbar] = useState({
  status: "",
  message: "",
});

const [snackbarVisibility, setSnackbarVisibility] = useState(false);

const card = cards.find(card=> card.id ===idCard);
const now = new Date();

 const [paymentMethod, setPaymenthMethod] = useState('');

  const handleSelectChange = (event) => {
    setPaymenthMethod(event.target.value);
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setSnackbarVisibility(false);
  setLoadingScreen({
    message:"Cargando saldo",
    duration: 2000,
  })
  setIsLoading(true);

  setTimeout(() => {
    //Logica de carga de saldo

    let newBalance = card.balance + amount;
    card.balance=newBalance;



    //Logica de generar una nueva transaccion 
    const transaction={
    date:`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`,
    time:`${String(now.getHours())}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`,
    type: "Carga de saldo",
    description: "Carga de saldo mediante aplicación",
    price: amount,
    cardId: card.id
  }
  
  addTransaction(transaction);
    setAmount("");
    setPaymenthMethod("");    
    setIsLoading(false);
    setSnackbar({
      status: "success",
      message: "Recarga realizada!",
    });
    setSnackbarVisibility(true);
  }, 2000);
};


  return (

    <>
      <Navbar/> 
    <Box
      sx={{
        width: '100vw',
        minHeight: '89.1vh',
        backgroundColor:"#00669C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4
      }}
    >
      <Card
        elevation={5}
        sx={{
          width: { xs: "90%", sm: "400px" },
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Número de tarjeta: {card.number}
          </Typography>

          <Typography variant="body1" sx={{display:"flex", gap:"5px"}}>
              Saldo actual:
              <p style={{fontWeight:"bold", color:"rgb(39, 174, 96)"}}>
                ${card.balance.toFixed(2)}
              </p>
          </Typography>

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Monto a cargar"
              type="number"
              fullWidth
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              required
              sx={{
                input: { color: "black" },
                label: { color: "black" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "#4A5568" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#63B3ED" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#63B3ED" },
              }}
            />

            <FormControl component="fieldset" sx={{ mt: 2, width:"100%" }}>
              <InputLabel id="demo-simple-select-label">Metodo de pago</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={paymentMethod}
                  label="Método de pago"
                  onChange={handleSelectChange}
                >
                  {console.log(paymentMethods)}
                  {paymentMethods.map((method)=> (
                    <MenuItem key={method.id} value={method.type}>{method.type}</MenuItem>
                  ))}
                </Select>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              disabled={!amount || !paymentMethod}
              sx={{
                mt: 3,
                backgroundColor: "transparent",
                fontWeight: "bold",
                color: "green",
                border: '1px solid #4CAF50',
                "&:hover": {
                  backgroundColor: "rgba(76, 175, 80, 0.1)",
                  borderColor: "#4CAF50",
                },
                "&.Mui-disabled": {
                  backgroundColor: "transparent",
                  color: "#A0AEC0",
                  borderColor: "#A0AEC0",
                },
              }}
            >
              Cargar saldo
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
    {snackbarVisibility && (
      <GenericSnackbar
        status={snackbar.status}
        message={snackbar.message}
        visibility={snackbarVisibility}
      />
    )}
    {isLoading && (
      <LoadingScreen
        message={loadingScreen.message}
        duration={loadingScreen.duration}
      />
    )}
  </>
  );
}
