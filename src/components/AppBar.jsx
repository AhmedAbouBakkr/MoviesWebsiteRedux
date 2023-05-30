import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0F0F0F",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "revert",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "#AD241A",
            }}
          >
            MOVIES
          </Typography>

          <Link style={{ textDecoration: "none" }} to="/">
            <Typography
              sx={{
                mx: 3,
                display: { xs: "none", md: "flex" },
                fontFamily: "revert",
                fontWeight: 400,
                opacity: 0.7,
                letterSpacing: ".2rem",
                color: "#ffffff",
                fontSize: "20px",
              }}
            >
              Home
            </Typography>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/addMovie">
            <Typography
              sx={{
                mx: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "revert",
                fontWeight: 400,
                opacity: 0.7,
                letterSpacing: ".2rem",
                color: "#ffffff",
                fontSize: "20px",
              }}
            >
              Add Movie
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
