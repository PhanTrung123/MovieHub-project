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

export default function ModalPlans({
  plan,
  open,
  handleClose,
  handleChangeInput,
  addPlan,
  error,
}) {
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
        <DialogTitle>
          {" "}
          {plan.id ? "Modal Edit Plan" : "Modal Add Plan"}
        </DialogTitle>
        <DialogContent className="flex flex-col gap-3 ">
          <TextField
            label="Level"
            name="level"
            type="number"
            fullWidth
            sx={{ mt: 2 }}
            onChange={handleChangeInput}
            value={plan.level}
            error={!!error.level}
            helperText={error.level}
            inputProps={{
              min: 0,
            }}
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            fullWidth
            sx={{ mt: 2 }}
            onChange={handleChangeInput}
            value={plan.price}
            error={!!error.price}
            helperText={error.price}
            inputProps={{
              min: 0,
            }}
          />
          <TextField
            label="Title"
            multiline
            fullWidth
            name="title"
            sx={{ mt: 2 }}
            onChange={handleChangeInput}
            rows={2}
            value={plan.title}
            error={!!error.title}
            helperText={error.title}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
            autoFocus
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={addPlan}>
            {plan.id ? "EDIT" : "ADD"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
