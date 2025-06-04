import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import Home from './Components/Home/Home'; 

function App() {
  return (
    <Router> 
      <Routes>

        <Route path="/" element={<LoginSignUp isLogin={true} />} />

        <Route path="/signUp" element={<LoginSignUp isLogin={false} />} />

        <Route path="/home" element={<Home />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
export default App;