import React from "react";
import { styled } from '@mui/material/styles'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo1 from '../../componentes/imagenes/logo1.png'
const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  });
};
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFAFA",
  [theme.breakpoints.down('sm')]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   
  },
}))

const Registro = () => {
  return (
    <>
      <StyledBox  sx={{ display:"flex", justifycontent:"flex-start"}}>
        <Box sx={{ marginRight: "auto" }}>
          <Link to="/">
            <img src={logo1} alt="logo" sx={{ width: 100, height: 100 }} />
          </Link>
        </Box>
      
      <Container component="main" maxWidth="xs"  sx={{marginRight:"auto"}}>
        <CssBaseline />
        <Box
             sx={{
             marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1 }} style={{ color: "#4b7f55" }}>
            <AppRegistrationIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              style={{ color: "#4b7f55" }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color="success"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="success"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="repeatpassword"
              label="Repeat Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="success"
            />

            <FormControlLabel
              control={
                <Checkbox value="remember" style={{ color: "#4b7f55" }} />
              }
              label="Remember me"
            />
            <Button
              style={{ backgroundColor: "#4b7f55" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
                <Link href="#" variant="body2" style={{ color: "#4b7f55" }}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
              </Container>
              </StyledBox>
    </>
  );
};
export default Registro;
