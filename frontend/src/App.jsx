import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import Home from './Components/Home/Home'; 
import LoadBalance from './Components/LoadBalance/LoadBalance';
import MyData from './Components/MyData/MyData';


function App() {
  return (
    <Router> 
      <Routes>

        <Route path="/" element={<LoginSignUp isLogin={true} />} />

        <Route path="/signUp" element={<LoginSignUp isLogin={false} />} />

        <Route path="/home" element={<Home />} />

        <Route path="/" element={<Home />} />

        <Route path="/loadBalance" element={<LoadBalance idCard={1}/>} />

        <Route path="/MyData" element={<MyData />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );

  
}
export default App;