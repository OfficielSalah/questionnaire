import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../assets/logo.png";

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="warning">
        <Toolbar sx={{ textAlign: "center" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Organizational Network Analysis
          </Typography>
          <Box
            component="img"
            sx={{
              height: 64,
              justifyContent: "right",
            }}
            alt="Your logo."
            src={Logo}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
