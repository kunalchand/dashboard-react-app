import { TableRow } from "@mui/material";
import "../styles/Row.css";
import StyledTableCell from "../styles/StyledTableCell";
import { BlogObject } from "../types/blog";
import ModalComponent from "./ModalComponent";

interface IRowProps {
  row: BlogObject;
}

const Row: React.FC<IRowProps> = ({ row }) => {
  return (
    <TableRow>
      <StyledTableCell sx={{ margin: "auto", textAlign: "center" }}>
        {row.userId}
      </StyledTableCell>
      <StyledTableCell sx={{ margin: "auto", textAlign: "center" }}>
        {row.id}
      </StyledTableCell>
      <StyledTableCell
        className="truncate-title"
        sx={{ margin: "auto", textAlign: "center" }}
      >
        {row.title}
      </StyledTableCell>
      <StyledTableCell>
        <ModalComponent row={row} />
      </StyledTableCell>
    </TableRow>
  );
};

export default Row;
