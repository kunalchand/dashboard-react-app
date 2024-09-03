import { Box, styled } from "@mui/material";

const StyledModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows[24]};
  padding: 20px;
`;

export default StyledModalContent;
