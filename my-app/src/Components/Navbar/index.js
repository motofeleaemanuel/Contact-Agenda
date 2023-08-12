import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ paddingTop: "8px", paddingBottom: "8px" }}
      >
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Contacts
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
