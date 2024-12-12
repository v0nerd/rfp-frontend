import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import UploadFile from "./components/UploadFile";
import ProposalForm from "./components/ProposalForm";
import ComplianceForm from "./components/ComplianceForm";
import { styled } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f0f0f0",
      paper: "rgba(255, 255, 255, 0.9)",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#333",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#333",
    },
  },
});

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  margin: "0 1.5rem",
  textDecoration: "none",
  fontSize: "1.125rem",
  fontWeight: 600,
  "&:hover": {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
    transition: "all 0.3s ease-in-out",
  },
}));

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: "1rem 0",
  textAlign: "center",
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar
          position="static"
          style={{
            background: "transparent",
            backgroundImage: "linear-gradient(to left, black, gray, white)",
            boxShadow: "none",
            borderBottom: "1px rgb(169, 114, 114)",
          }}
        >
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Box>
              <NavLink to="/">Upload</NavLink>
              <NavLink to="/proposal">Generate Proposal</NavLink>
              <NavLink to="/compliance">Generate Compliance Report</NavLink>
            </Box>
            <Box>
              <IconButton color="inherit" component={Link} to="/login">
                <LoginIcon />
              </IconButton>
              <IconButton color="inherit" component={Link} to="/register">
                <AccountCircleIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            position: "relative",
            backgroundImage: "url('https://st.depositphotos.com/1934071/1961/i/450/depositphotos_19616217-stock-photo-the-light-trails.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "calc(100vh - 64px - 64px)",
            padding: "2rem",
            textAlign: "center",
            color: "#fff",
            "::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust transparency level
              zIndex: 1,
            },
            zIndex: 2, // Ensure text is above the overlay
          }}
        >
          <Typography variant="h1" gutterBottom sx={{ position: "relative", zIndex: 3, color: "cyan", marginTop: "50px" }}>
            Small Businesses <br />
            Win Government Contracts
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ position: "relative", zIndex: 3, color: "#007bff" }}
          >
            Augierai.com is a comprehensive AI-powered platform designed to assist small to mid-sized businesses through
            the entire procurement lifecycle, from finding opportunities to teaming and project management. <br />
            Explore our powerful tools and features using the navigation above.
          </Typography>
        </Box>

        <Routes>
          <Route path="/" element={<UploadFile />} />
          <Route path="/proposal" element={<ProposalForm />} />
          <Route path="/compliance" element={<ComplianceForm />} />
        </Routes>

        <StyledFooter>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Our Platform. All Rights Reserved.
          </Typography>
        </StyledFooter>
      </Router>
    </ThemeProvider>
  );
}

export default App;