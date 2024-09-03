import { Box, Button, Modal } from "@mui/material";
import * as React from "react";
import StyledModalContent from "../styles/StyledModalContent";
import { BlogObject } from "../types/blog";
import BodyComponent from "./BodyComponent";
import CloseIconComponent from "./CloseIconComponent";
import TitleComponent from "./TitleComponent";

interface IModalComponentProps {
  row: BlogObject;
}

const ModalComponent: React.FC<IModalComponentProps> = ({ row }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box mx={3} my={2} display="flex" justifyContent="space-between">
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <StyledModalContent>
          <Box display="flex" justifyContent="space-between">
            <TitleComponent titleContent={row.title} />
            <CloseIconComponent handleClose={handleClose} />
          </Box>
          <BodyComponent bodyContent={row.body} />
        </StyledModalContent>
      </Modal>
    </Box>
  );
};

export default ModalComponent;
