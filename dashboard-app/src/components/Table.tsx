import {
  Paper,
  TableBody,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import React from "react";
import StyledMuiTable from "../styles/StyledMuiTable ";
import StyledTableCell from "../styles/StyledTableCell";
import { BlogObject } from "../types/blog";
import Row from "./Row";

interface ITableProps {
  blogs: BlogObject[];
  filterText: string;
}

const Table: React.FC<ITableProps> = ({ blogs, filterText }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [orderBy, setOrderBy] = React.useState<keyof BlogObject>("title");
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    console.log(event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (property: keyof BlogObject) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    setPage(0);
  };

  const filteredBlogs: BlogObject[] = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortedBlogs = filteredBlogs.sort((a, b) => {
    if (orderBy === "title" || orderBy === "body") {
      return order === "asc"
        ? a[orderBy].localeCompare(b[orderBy])
        : b[orderBy].localeCompare(a[orderBy]);
    } else {
      return order === "asc"
        ? a[orderBy] - b[orderBy]
        : b[orderBy] - a[orderBy];
    }
  });

  return sortedBlogs.length === 0 ? (
    <Typography variant="h6">No results found</Typography>
  ) : (
    <>
      <Paper sx={{ mb: 5 }}>
        <StyledMuiTable>
          <TableHead style={{ backgroundColor: "#D3D3D3" }}>
            <TableRow>
              <StyledTableCell>
                <TableSortLabel
                  active={orderBy === "userId"}
                  direction={orderBy === "userId" ? order : "asc"}
                  onClick={() => handleSort("userId")}
                >
                  UserID
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>
                <TableSortLabel
                  active={orderBy === "id"}
                  direction={orderBy === "id" ? order : "asc"}
                  onClick={() => handleSort("id")}
                >
                  ID
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>
                <TableSortLabel
                  active={orderBy === "title"}
                  direction={orderBy === "title" ? order : "asc"}
                  onClick={() => handleSort("title")}
                >
                  Title
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedBlogs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((blog) => (
                <Row key={blog.id} row={blog} />
              ))}
          </TableBody>
        </StyledMuiTable>
        <TablePagination
          rowsPerPageOptions={[5, 7, 10, 25]}
          component="div"
          count={filteredBlogs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ backgroundColor: "#D3D3D3" }}
        />
      </Paper>
    </>
  );
};

export default Table;
