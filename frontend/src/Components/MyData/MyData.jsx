// src/Components/MyData/MyData.jsx
import React, { useState, useEffect } from 'react';
import './MyData.css';
import Navbar from '../Navbar/Navbar';
import { findById } from '../../data/users';

function MyData() {

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    clave: '',
    correo: '',
    documento: '',
    celular: '',
    fijo: '',
    aceptaInfo: false,
  });

  useEffect(() => {
    const userId = localStorage.getItem('idUsuario');
    if (userId) {
      const user = findById(userId);
      if (user) {
        // Si tienes nombre y apellido juntos en 'name', puedes separarlos acá si querés:
        const [nombre, ...apellidoArr] = user.name.split(' ');
        const apellido = apellidoArr.join(' ');

        setFormData({
          nombre: nombre || '',
          apellido: apellido || '',
          clave: '****', // no mostrar clave real
          correo: user.email,
          documento: user.dni.toString(), // para que sea string
          celular: '',
          fijo: '',
          aceptaInfo: false,
        });
      }
    }
  }, []);



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem('userData', JSON.stringify(formData));
    alert('Cambios guardados');
  };

  return (
    <>
        <Navbar />
            <div className="my-data-container">
            <h2>Mis Datos</h2>
            <p>Estos son tus datos, podrás editar los campos permitidos de la información de tu cuenta</p>

            <div className="form-group">
                <label>Nombre/s</label>
                <input type="text" value={formData.nombre} name="nombre" disabled />
            </div>

            <div className="form-group">
                <label>Apellido</label>
                <input type="text" value={formData.apellido} name="apellido" disabled />
            </div>

            <div className="form-group">
                <label>Clave</label>
                <input type="password" value={formData.clave} name="clave" disabled />
            </div>

            <div className="form-group">
                <label>Correo electrónico</label>
                <input type="email" value={formData.correo} name="correo" onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>N° de documento</label>
                <input type="text" value={formData.documento} name="documento" disabled />
            </div>

            <div className="form-group">
                <label>N° de teléfono celular</label>
                <input type="text" value={formData.celular} name="celular" onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>N° de teléfono fijo</label>
                <input type="text" value={formData.fijo} name="fijo" onChange={handleChange} />
            </div>

            <div className="form-group checkbox">
                <input
                type="checkbox"
                name="aceptaInfo"
                checked={formData.aceptaInfo}
                onChange={handleChange}
                />
                <span>Acepto recibir información relativa al Sistema Único de Boleto Electrónico y al servicio y obras de transporte</span>
            </div>

            <button className="btn-guardar" onClick={handleSave}>Guardar los cambios</button>
            </div>
    </>
  );
}

export default MyData;
