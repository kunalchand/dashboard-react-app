import { Box, Container } from "@mui/material";
import BlogsTable from "./pages/BlogsTable";

function App() {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <BlogsTable />
      </Box>
    </Container>
  );
}

export default App;
