// src/Components/MyData/MyData.jsx
import React, { useState, useEffect } from 'react';
import './MyData.css';
import Navbar from '../Navbar/Navbar';
import { findById } from '../../data/users';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton'
import EditDataModal from '../Modals/EditDataModal';
import { InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import GenericSnackbar from "../Snackbar/GenericSnackbar";

function MyData() {

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

  const showLoadingScreen = () => {
    setSnackbarVisibility(false);
    setIsLoading(true);
    closeEditDataModal();
    setLoadingScreen({
      message:"Modificando datos",
      duration: 2000,
    })
    setTimeout( () => {
      setIsLoading(false);
      setSnackbar({
        status: "success",
        message: "Datos modificados!",
      });
      setSnackbarVisibility(true);
    }, 2000)
  }


  const [visibilityEditDataModal, setVisibilityEditDataModal] = useState(false);
  const [flagUpdate, setFlagUpdate] = useState(false);
  const [valueToEdit, setValueToEdit] = useState("");
  const [label, setLabel] = useState("");
  const openEditContactModal = () => {
    setVisibilityEditDataModal(true);
  }
  const closeEditDataModal = () => {
    setVisibilityEditDataModal(false);
  }
  const setValue = (value) => {
    setValueToEdit(value);
  }

  const dataUpdated = () => {
    setFlagUpdate(true);
  }

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    contraseña: '',
    correo: '',
    documento: '',
    celular: '',
  });

  useEffect(() => {

    const userId = localStorage.getItem('idUsuario');
    const localUserData = localStorage.getItem('userData');

    if (localUserData) {

      const parsed = JSON.parse(localUserData);
      setFormData(parsed);
      
    } else if (userId) {
      const user = findById(userId);
      if (user) {
        // Si tienes nombre y apellido juntos en 'name', puedes separarlos acá si querés:
        const [nombre, ...apellidoArr] = user.name.split(' ');
        const apellido = apellidoArr.join(' ');

        setFormData({
          nombre: nombre || '',
          apellido: apellido || '',
          contraseña: user.password, // no mostrar clave real
          correo: user.email,
          documento: user.dni.toString(), // para que sea string
          celular: user.celular.toString(),
        });
      }
    }
  }, [flagUpdate]);

  const handleClick = (label, value) => {
    setLabel(label);
    openEditContactModal();
    setValue(value)
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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

            <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                <label style={{fontWeight:"bold"}}>Contraseña</label>
                 <div className="input-button-container">
                  <TextField
                    id="password"
                    type={showPassword ? "text" : "password"}
                    disabled
                    name="password"
                    size="small"
                    value={formData.contraseña}
                    variant="outlined"
                    sx={{
                      width:"100%",
                    }}
                    InputProps={{
                      style: { color: "black", border: "none" },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOff sx={{ color: "black" }} />
                            ) : (
                              <Visibility sx={{ color: "black" }} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                    <IconButton aria-label="" onClick={() => handleClick ("contraseña", formData.contraseña)}>
                      <EditIcon sx={{color:"#00669C"}}/>
                    </IconButton>
                </div>
            </div>

            <div className="form-group">
                <label style={{marginTop:"25px"}}>Correo electrónico</label>
                <div className="input-button-container">
                  <input type="email" value={formData.correo} name="correo" disabled />
                  <IconButton aria-label="" onClick={() => handleClick ("correo", formData.correo)}>
                    <EditIcon sx={{color:"#00669C"}}/>
                  </IconButton>
                </div>
            </div>

            <div className="form-group">
                <label>N° de documento</label>
                <input type="text" value={formData.documento} name="documento" disabled />
            </div>

            <div className="form-group">
                <label>N° de teléfono celular</label>
                <div className="input-button-container">
                  <input type="text" value={formData.celular} name="celular" disabled />
                  <IconButton aria-label="" onClick={() => handleClick ("celular", formData.celular)}>
                    <EditIcon sx={{color:"#00669C"}}/>
                  </IconButton>
                </div>
            </div>
          </div>
          <EditDataModal
            showEditDataModal={visibilityEditDataModal}
            closeEditDataModal={closeEditDataModal}
            valueToEdit={label}
            value={valueToEdit}
            formData={formData}
            dataUpdated={dataUpdated}
            showLoader={showLoadingScreen}
          />
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

export default MyData;
