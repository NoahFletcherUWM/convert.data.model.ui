import React from "react";
import { Link } from "react-router-dom";
import routes from "../../../routes/routes";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Paper,
} from "@mui/material";

const Header = () => {
  return (
    <Paper className="header-container" sx={{ flexGrow: 1 }}>
      <AppBar className="header-app-bar" position="static">
        <Toolbar>
          <Stack
            className="header-text-stack"
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <Typography variant="h6" component="div">
              Easy Data Models
            </Typography>
            {routes
              .filter((group) => group.component.name !== "NotFound")
              .map((route, index) => (
                <Link
                  key={index}
                  to={route.path}
                  style={{ textDecoration: "none" }}
                >
                  <Button>
                    <Typography variant="h6" component="div">
                      {route.component.name}
                    </Typography>
                  </Button>
                </Link>
              ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default Header;
