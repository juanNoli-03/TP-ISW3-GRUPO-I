import { Box, Card, CardContent, Button, Container } from "@mui/material";
import './CardDetail.css';
import { findCardByIdUser } from '../../utils';
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


export default function CardDetail() {

  const navigate =useNavigate();


 const cardSelected = findCardByIdUser ();
  
  const handleLoadBalance = ()=>{

    navigate('/loadBalance', {
    state: { cardId: cardSelected.id }
  });
  }

  return (
    <Container className="container">
    <Box className="boxTitle">
      <h1>Mis tarjetas SUBE</h1>
    </Box>
    <Card className="card" elevation={10}>
      <CardContent className="cardContent">
        <Box className="imgBox">
          <img src="../../../src/assets/tarjeta_sube.png" alt="" />
        </Box>
        <Box className="detailsContainer">
          <Box className="detailBox">
            <h3>Tarjeta:</h3>
            <span>{cardSelected.number}</span>
          </Box>
          <Box className="detailBox">
            <h3>Beneficio:</h3>
            <span>No tenés asignado el beneficio de Tarifa Social</span>
          </Box>
          <Box className="detailBox">
            <h3>Dar de baja:</h3>
            <Box className="detailBox">
              <Button variant="contained">Robo</Button>
              <Button variant="contained">Perdida</Button>
              <Button variant="contained">Rotura</Button>
            </Box>
          </Box>
          <Box className="detailBox">
              <Button variant="contained" onClick={handleLoadBalance}>Cargar Saldo</Button>

            </Box>
        </Box>

        
        <Box className="amountBox">
          <h2>Saldo:</h2>
          <h2 className="amount">${cardSelected.balance}</h2>
        </Box>
    
      </CardContent>
    </Card>
  </Container>
  )
}   
