import CardDetail from '../CardDetail/CardDetail'
import Movements from '../Movement/Movements'
import { Box } from '@mui/material'
import "./Home.css"

export default function Home() {
  return (
    <Box className="homeContainer">
        <CardDetail/>
        <Movements/>
    </Box>
  )
}
