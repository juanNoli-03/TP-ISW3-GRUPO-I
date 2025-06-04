import { Box, Card, CardContent, Button, Container } from "@mui/material";
import './CardDetail.css';
import { findCardByIdUser } from '../../utils';

export default function CardDetail() {

 const cardSelected = findCardByIdUser ();
  
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
            <p>{cardSelected.number}</p>
          </Box>
          <Box className="detailBox">
            <h3>Beneficio:</h3>
            <p>No tenés asignado el beneficio de Tarifa Social</p>
          </Box>
          <Box className="detailBox">
            <h3>Dar de baja:</h3>
            <Box className="detailBox">
              <Button variant="contained">Robo</Button>
              <Button variant="contained">Perdida</Button>
              <Button variant="contained">Rotura</Button>
            </Box>
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
