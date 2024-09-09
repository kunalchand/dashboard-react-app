import { TableRow } from "@mui/material";
import { Link } from "react-router-dom";
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
        <Link to={`/blogs/${row.id}`}>{row.id} </Link>
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
