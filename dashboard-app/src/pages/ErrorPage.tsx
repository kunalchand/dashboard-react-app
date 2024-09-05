import { Box, Typography } from "@mui/material";

const ErrorPage: React.FC = function () {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop="25%"
    >
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="h4">Page not found. :(</Typography>
    </Box>
  );
};

export default ErrorPage;
