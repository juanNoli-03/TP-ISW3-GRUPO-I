import CardDetail from '../CardDetail/CardDetail'
import Movements from '../Movement/Movements'
import { Box } from '@mui/material'
import "./Home.css"
import Navbar from '../Navbar/Navbar'

export default function Home() {
  return (
    <>
      <Navbar /> 
      <Box className="homeContainer">
        <CardDetail />
        <Movements />
      </Box>
    </>
  )
}
