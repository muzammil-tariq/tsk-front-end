import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import * as React from "react";

const Modal = ({
  open,
  setOpen,
  onOk,
  title,
  children,
  loading = false,
  okText = "ok",
}) => {
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle textAlign="center">
        <Typography variant="h4" component="h4">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={toggle}>
          cancel
        </Button>
        <LoadingButton loading={loading} onClick={onOk}>
          {okText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
export default Modal;
