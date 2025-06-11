// src/Components/Navbar/Navbar.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Acá podés limpiar localStorage o hacer lógica extra
    localStorage.removeItem("idUsuario");
    localStorage.removeItem("nombreUsuario");
    localStorage.removeItem("userData");
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img src={logo} alt="Logo" style={{ cursor: 'pointer' }} />
        </Link>
      </div>

      <div className="navbar-links">
        {/* Mostrar "Ver mis datos" solo si estamos en /home */}
        {(location.pathname === '/home' || location.pathname === '/loadBalance') && (
          <Link to="/MyData">Ver mis datos</Link>
        )}

        {/* Mostrar "Cerrar sesión" en todas las vistas excepto login/signUp */}
        {(location.pathname === '/home' || location.pathname === '/MyData' || location.pathname === '/loadBalance') && (
          <button className="logout-button" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
