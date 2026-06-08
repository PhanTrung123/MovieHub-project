import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCategory({category, open, handleClose, hanleChangeInput, addCategory, error  }) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        fullWidth="md"
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        role="alertdialog"
      >
        <DialogTitle>  {category.id ? "Modal Edit Category" : "Modal Add Category" }</DialogTitle>
        <DialogContent className="flex flex-col gap-3 ">
          <TextField
            label="Name"
            name="name"
            fullWidth
            sx={{ mt : 2 }}
            onChange={hanleChangeInput}
            value={category.name}
             error={!!error.name}
            helperText={error.name}
          />
          <TextField
            label="Description"
            multiline
            fullWidth
            name="description"
            sx={{ mt : 2 }}
            onChange={hanleChangeInput}
            rows={3}
            value={category.description}
            error={!!error.description}
            helperText={error.description}

          />
        </DialogContent>
        <DialogActions>
          <Button  variant="contained" color="error"  onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={addCategory}>{category.id ? "EDIT" : "ADD"}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
