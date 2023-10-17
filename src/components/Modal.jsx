/* eslint-disable react/prop-types */

import { Box } from "@mui/material";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";

export default function ModalRegistro({ children, open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          background: "black",
          "&:hover": {
            background: "white",
            color: "black", // Define el color que deseas cuando pases el mouse sobre el botón
          },
        }}
        onClick={handleOpen}
      >
        Registro Movimiento
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
