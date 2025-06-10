import React, { useState, useEffect } from 'react'
import {usersPaymentMethods} from '../../data/users_x_payment_methods' 
import {cards} from '../../data/cards' 
import {paymentMethods} from '../../data/payment_methods' 
import {addTransaction} from '../../data/transactions' 
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";


export default function LoadBalance({idCard}) {


//Metodos de pago del usuario
const [userPaymentMethods,setUserPaymentMethods]=useState([]);

//Metodos de pago
const [paymentMethodsData,setPaymentMethodsData]=useState([]);

const [amount, setAmount] = useState(0);
const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({
    data: "",
    type: "",
});

const [loading, setLoading] = useState(false);
const navigate = useNavigate();


const card = cards.find(card=> card.id ===idCard);
const now = new Date();



useEffect( ()=>{

 //Traer los metodos de pago del usuario
    const fetchUserPaymentMethods = ()=>{
        //Seteamos los metodos de pago del usuario
        const methods =usersPaymentMethods.filter(method => method.userId ===card.userId && method.activated);
        setUserPaymentMethods(methods);
        fetchPaymentMethods();
    }

    const fetchPaymentMethods = ()=>{
        setPaymentMethodsData(paymentMethods);
    }


 //Traer los datos del usuario ?
    fetchUserPaymentMethods();
    

}
,[card]);

const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !selectedPaymentMethod) {
      console.log("❌ Falta monto o método seleccionado");
      return;
    }
 setLoading(true); // Activamos loader
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
  setLoading(false);
    navigate("/home"); // Redireccionar
  }, 2000);
};


  return (
    <>
    {loading ? (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '300px',
      gap: 2,
    }}
  >
    <CircularProgress color="success" />
    <Typography variant="h6" color="textSecondary">
      Cargando saldo...
    </Typography>
  </Box>
  ) : (
<Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, #F8F4C4, #D5E0B5, #A5C3A7, #6D8B89, #47667B)',
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

          <Typography variant="body1" sx={{ mb: 2 }}>
            Saldo actual: ${card.balance.toFixed(2)}
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

            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <FormLabel component="legend" sx={{ color: "black", mb: 1 }}>
                Método de pago
              </FormLabel>
              <RadioGroup name="paymentMethod">
                {userPaymentMethods.map((method) => {
                  const info = paymentMethodsData.find((p) => p.id === method.paymentMethodId);
                  return (
                    <FormControlLabel
                      key={method.id}
                      value={method.userId}
                      control={
                        <Radio
                          checked={selectedPaymentMethod.data === method.data}
                          onChange={() => setSelectedPaymentMethod({ data: method.data, type: info.type })}
                        />
                      }
                      label={`${info ? info.type : "Método desconocido"}: ${method.data}`}
                      sx={{ color: "black" }}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              disabled={!amount || !selectedPaymentMethod}
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
    )}

  </>
  );
}
