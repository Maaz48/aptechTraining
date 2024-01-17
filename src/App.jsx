import Adduser from "./components/pages/adduser";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Showusers from "./components/pages/showusers";
import { Grid } from "@mui/material";
const App = () => {
  let activeStyle = { color: "red", textDecoration: "none" };
  let nonActiveStyle = { color: "blue", textDecoration: "none" };
  return (
    <>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 / 0.25 }}
              >
                Crud App
              </Typography>
              <Grid display="flex" gap={2}>
                <NavLink
                  style={(e) => {
                    return e.isActive ? activeStyle : nonActiveStyle;
                  }}
                  to="/"
                >
                  Add user
                </NavLink>
                <NavLink
                  style={(e) => {
                    return e.isActive ? activeStyle : nonActiveStyle;
                  }}
                  to="/users"
                >
                  Show users
                </NavLink>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/" element={<Adduser />} />
          <Route path="/users" element={<Showusers />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
