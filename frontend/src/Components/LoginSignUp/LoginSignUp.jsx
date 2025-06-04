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
import { users } from "../../data/users";

export default function LoginSignUp({ isLogin }) {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validarDatos = (usuario) => {
    let loginExitoso = false;

    for (const userRegistrado of users) {
      if (usuario.email === userRegistrado.email && usuario.password === userRegistrado.password) {
        alert("Login Exitoso!"); 
        loginExitoso = true; 
        navigate('/home'); 
        break;
      }
    }

    if (!loginExitoso) {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }

    console.log("Validando datos para:", usuario);
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'linear-gradient(to right, #F8F4C4, #D5E0B5, #A5C3A7, #6D8B89, #47667B)',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: 'hidden',
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
          elevation={5}
          sx={{
            backgroundColor: "transparent",
            borderRadius: "8px",
            width: { xs: "90%", sm: "400px" },
            border: 'none', 
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: "20px", p: 5 }}>
            <Typography
              variant="h4"
              color="black"
              sx={{ fontWeight: "bold", textAlign: "center", mb: 1 }}
            >
              {isLogin === true ? "Inicio de Sesion" : "Register"}
            </Typography>
            <Typography
              variant="body2"
              color="black"
              sx={{ textAlign: "center", mb: 3 }}
            >
              Por favor, introduzca su usuario y contraseña
            </Typography>

            <TextField
              id="email"
              type="text"
              label="Username or E-mail"
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

            <Button
              variant="contained"
              type="submit"
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
              onClick={() => validarDatos(usuario)}
            >
              {isLogin === true ? "Login" : "Create Account"}
            </Button>

          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

LoginSignUp.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};