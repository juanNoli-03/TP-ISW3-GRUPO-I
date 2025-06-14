import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { InputAdornment, IconButton, Box, Container } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Card, CardContent, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Lock from "@mui/icons-material/Lock";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import GenericSnackbar from "../Snackbar/GenericSnackbar";
import { users,addUser } from "../../data/users";
import { addCard} from "../../data/cards";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PhoneIcon from "@mui/icons-material/Phone";

export default function LoginSignUp({ isLogin }) {

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

  const [usuario, setUsuario] = useState({
    name: "",
    dni: "",
    celular: "",
    email: "",
    password: "",
  });
  const [card, setCard] = useState({
    number: "",
  })
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const navigateSignUp = () => {
    setUsuario({
      name: "",
      dni: "",
      celular: "",
      email: "",
      password: "",
    })
    navigate("/signup")
  }

  const navigateLogin = () => {
     setUsuario({
      name: "",
      dni: "",
      celular: "",
      email: "",
      password: "",
    })
    setCard({
      number: ""
    })
    navigate("/login")
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validarDatos = (usuario) => {
    setSnackbarVisibility(false);
    setIsLoading(false);
    let loginExitoso = false;

    for (const userRegistrado of users) {
      if (usuario.email === userRegistrado.email && usuario.password === userRegistrado.password) {
        localStorage.setItem("idUsuario", userRegistrado.id);
        localStorage.setItem("nombreUsuario", userRegistrado.name);
        loginExitoso = true;
        break;
      }
    }

    if (loginExitoso) {
      setLoadingScreen({
        message: "Iniciando Sesión",
        duration: 2000,
      }),
      setIsLoading(true),
      setTimeout(() => {
          navigate("/home");
      }, 2000)
       setUsuario({
          name: "",
          dni: "",
          celular: "",
          email: "",
          password: "",
        })
    } else {
     setTimeout(() => {
        setSnackbar({
          status: "error",
          message: "Datos incorrectos. Verificalos y volvé a ingresarlos.",
        });
        setSnackbarVisibility(true);
      }, 0);
    }
  };

  const camposSonValidos = () => {
  if (isLogin) {
    return usuario.email.trim() !== "" && usuario.password.trim() !== "";
  } else {
    return (
      usuario.email.trim() !== "" &&
      usuario.password.trim() !== "" &&
      usuario.dni.trim() !== "" &&
      usuario.celular.trim() !== "" &&
      usuario.name.trim() !== "" &&
      card.number.trim() !== ""
    );
  }
};

const registrarUsuario=()=>{

  const usuarioAEnviar = {
    name: usuario.name,
    email: usuario.email.trim(),
    password: usuario.password.trim(),
    // campos numéricos convertidos:
    dni: parseInt(usuario.dni),
    celular: parseInt(usuario.celular),
  };

  //Enviamos user y guardamos su id
  let idNuevo= addUser(usuarioAEnviar);

  const cardAEnviar={
    number: card.number,
    balance: 0,
    activated:true,
    userId:idNuevo
  }

  //Enviamos la card
  addCard(cardAEnviar)

  setLoadingScreen({
    message: "Creando cuenta",
    duration: 2000,
  }),
  setIsLoading(true);

  setTimeout(() => {
    setUsuario({
      name: "",
      dni: "",
      celular: "",
      email: "",
      password: "",
    })
    setCard({
      number: ""
    })
    navigate("/");
    setIsLoading(false);
    setSnackbar({
      status: "success",
      message: "Cuenta creada con éxito!",
    });
    setSnackbarVisibility(true);
  }, 2000)

}

  return (
    <>
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(/Fondo_Login.jpg)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          p: 0,
        }}
      >
        <Card
          variant="elevation"
          elevation={20}
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            width: { xs: "90%", sm: "400px" },
            border: 'none',
            boxShadow: "0px 5px 25px #00669C",
          }}
        >
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: "20px", p: isLogin ? 5 : 0, pt: isLogin ? 5 : 1, pr: !isLogin ? 3 : 5, pl: !isLogin ? 3 : 5 }}>
            <img src="/app-sube.webp" alt="" style={{width:"100px", height:"100px", display:"flex", alignSelf:"center"}} />
            <Typography
              variant="h4"
              color="#00669C"
              sx={{ fontWeight: "bold", textAlign: "center", mb: !isLogin ? 0.1 : 1 }}
            >
              {isLogin === true ? "Inicio de Sesión" : "Registrarse"}
            </Typography>

            {isLogin ? (
              <>
                <TextField
                  id="email"
                  type="text"
                  label="E-mail"
                  name="email"
                  size="small"
                  value={usuario.email}
                  onChange={(e) =>
                    setUsuario({
                      ...usuario,
                      email: e.target.value,
                    })
                  }
                  variant="outlined"
                  InputProps={{
                    style: { color: "black" },
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4A5568",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#63B3ED",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#63B3ED",
                    },
                  }}
                />

                <TextField
                  id="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  size="small"
                  value={usuario.password}
                  onChange={(e) =>
                    setUsuario({
                      ...usuario,
                      password: e.target.value,
                    })
                  }
                  variant="outlined"
                  InputProps={{
                    style: { color: "black" },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
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
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4A5568",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#63B3ED",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#63B3ED",
                    },
                  }}
                />
              </>
            ) : (
              <>
                <TextField
                  id="email"
                  type="text"
                  label="E-mail"
                  name="email"
                  size="small"
                  value={usuario.email}
                  onChange={(e) =>
                    setUsuario({
                      ...usuario,
                      email: e.target.value,
                    })
                  }
                  variant="outlined"
                  InputProps={{
                    style: { color: "black" },
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4A5568",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#63B3ED",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#63B3ED",
                    },
                  }}
                />
                <TextField
                  id="name"
                  type="text"
                  label="Nombre y Apellido"
                  name="name"
                  size="small"
                  value={usuario.name}
                  onChange={(e) =>
                    setUsuario({
                      ...usuario,
                      name: e.target.value,
                    })
                  }
                  variant="outlined"
                  InputProps={{
                    style: { color: "black" },
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4A5568",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#63B3ED",
                    },
                  }}
                />
                <TextField
                  id="dni"
                  type="number"
                  label="DNI"
                  name="dni"
                  size="small"
                  value={usuario.dni}
                  onChange={(e) =>
                    setUsuario({
                      ...usuario,
                      dni: e.target.value,
                    })
                  }
                  variant="outlined"
                  InputProps={{
                    style: { color: "black", MozAppearance: 'textfield' },
                    startAdornment: (
                      <InputAdornment position="start">
                        <AssignmentIndIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4A5568",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#63B3ED",
                    },
                    '& input[type=number]': {
                      MozAppearance: 'textfield',
                    },
                    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                      WebkitAppearance: 'none',
                      margin: 0,
                    },
                  }}
                />

                <TextField
                  id="celular"
                  type="number"
                  label="Telefono Celular"
                  name="celular"
                  size="small"
                  value={usuario.celular}
                  onChange={(e) =>
                    setUsuario({
                      ...usuario,
                      celular: e.target.value,
                    })
                  }
                  variant="outlined"
                  InputProps={{
                    style: { color: "black" },
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon sx={{ color: "black", MozAppearance: 'textfield' }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4A5568",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#63B3ED",
                    },
                    '& input[type=number]': {
                      MozAppearance: 'textfield',
                    },
                    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                      WebkitAppearance: 'none',
                      margin: 0,
                    },
                  }}
                />
                <TextField
                  id="cardNumber"
                  type="number"
                  label="Numero de Tarjeta SUBE"
                  name="cardNumber"
                  size="small"
                  value={card.number}
                  onChange={(e) =>
                    setCard({
                      ...card,
                      number: e.target.value,
                    })
                  }
                  variant="outlined"
                  InputProps={{
                    style: { color: "black" , MozAppearance: 'textfield'},
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCardIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4A5568",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#63B3ED",
                    },
                    '& input[type=number]': {
                      MozAppearance: 'textfield',
                    },
                    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                      WebkitAppearance: 'none',
                      margin: 0,
                    },
                  }}
                />

                <TextField
                  id="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  size="small"
                  value={usuario.password}
                  onChange={(e) =>
                    setUsuario({
                      ...usuario,
                      password: e.target.value,
                    })
                  }
                  variant="outlined"
                  InputProps={{
                    style: { color: "black" },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
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
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4A5568",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#63B3ED",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#63B3ED",
                    },
                  }}
                />

              </>
            )}
            <Button
              variant="contained"
              type="submit"
              disabled={!camposSonValidos()}
              sx={{
                backgroundColor: "transparent",
                fontWeight: "bold",
                color: "green",
                borderRadius: "4px",
                p: "10px 0",
                border: '1px solid #4CAF50',
                "&:hover": {
                  backgroundColor: "rgba(76, 175, 80, 0.1)",
                  borderColor: "#4CAF50",
                },
                "&.Mui-disabled": {
                  backgroundColor: "transparent",
                  color: "#A0AEC0",
                  borderColor: "#A0AEC0",
                  fontWeight: "bold",
                },
              }}
              endIcon={
                isLogin === true ? (
                  <LoginIcon sx={{ color: "#4CAF50" }} />
                ) : isLogin === false ? (
                  <HowToRegIcon sx={{ color: "#4CAF50" }} />
                ) : (
                  <CheckIcon sx={{ color: "#4CAF50" }} />
                )
              }
              onClick={() => isLogin ? validarDatos(usuario) : registrarUsuario(usuario)}
            >
              {isLogin === true ? "Iniciar Sesión" : "Crear Cuenta"}
            </Button>

            <Typography variant="body2" sx={{ textAlign: "center", display:"flex", flexDirection:"column", justifyContent:"center" }}>
              {isLogin ? (
                <>¿No tenés cuenta? <a onClick={() => navigateSignUp() } style={{ cursor: 'pointer', fontWeight:"bold", textDecoration:"underline", color:"#00669C" }}>Registrate</a></>
              ) : (
                <>¿Ya tenés cuenta? <a onClick={() => navigateLogin () } style={{ cursor: 'pointer', fontWeight:"bold", textDecoration:"underline", color:"#00669C" }}>Iniciá sesión</a></>
              )}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
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

LoginSignUp.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};