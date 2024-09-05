import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop="25%"
    >
      <Link to="/blogs">
        <Button variant="contained">Blogs Page</Button>
      </Link>
    </Box>
  );
};

export default Root;
