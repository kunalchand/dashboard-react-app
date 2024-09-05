import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BlogsTable from "./pages/BlogsTable";
import ErrorPage from "./pages/ErrorPage";
import Root from "./routes/Root";

const navItems = ["Home", "Blogs", "Contact"];

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CssBaseline />
          <AppBar component="nav" position="sticky">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  DashApp
                </Link>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Link to="/blogs" key={"blogs"}>
                  <Button key={"blogs"} sx={{ color: "#fff" }}>
                    Blogs
                  </Button>
                </Link>
                <Link to="/error" key={"error"}>
                  <Button key={"error"} sx={{ color: "#fff" }}>
                    Error
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Root />}></Route>
            <Route path="/blogs" element={<BlogsTable />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
