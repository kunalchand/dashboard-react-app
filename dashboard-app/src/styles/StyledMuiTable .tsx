import { styled } from "@mui/material";
import MuiTable from "@mui/material/Table";

const StyledMuiTable = styled(MuiTable)`
  & > tbody > tr:hover {
    background-color: #fffee0;
  }

  & > tbody > tr > td:hover {
    background-color: #dab1da;
  }
`;

export default StyledMuiTable;
