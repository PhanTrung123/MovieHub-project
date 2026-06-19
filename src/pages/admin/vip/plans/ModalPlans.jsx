import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { styleModalBg } from "../../../../utils/StyleModalContants";

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
    <Dialog
      open={open}
      fullWidth
      maxWidth="md"
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      role="alertdialog"
      PaperProps={{
        className: "modal-plan-paper",
      }}
      sx={styleModalBg}
    >
      <DialogTitle
        sx={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          fontWeight: 700,
          fontSize: "1.2rem",
          px: 3,
          pt: 3,
          pb: 1.5,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background:
            "linear-gradient(90deg, rgba(255,0,102,0.08), rgba(124,58,237,0.08))",
        }}
      >
        {plan.id ? "Modal Edit Plan" : "Modal Add Plan"}
      </DialogTitle>

      <DialogContent
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          px: 2,
          py: 2,
          "& .MuiTextField-root": {
            mt: 2,
          },
          "& .MuiInputLabel-root": {
            color: "rgba(226,232,240,0.75)",
          },
          "& .MuiOutlinedInput-root": {
            color: "#e2e8f0",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.03)",
            transition: "0.25s ease",
          },
          "& .MuiOutlinedInput-root fieldset": {
            borderColor: "rgba(255,255,255,0.12)",
          },
          "& .MuiOutlinedInput-root:hover fieldset": {
            borderColor: "rgba(255,255,255,0.28)",
          },
          "& .MuiOutlinedInput-root.Mui-focused fieldset": {
            borderColor: "#ff0055",
            boxShadow: "0 0 0 1px rgba(255,0,85,0.25)",
          },
          "& .MuiFormHelperText-root": {
            marginLeft: 0,
          },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
          "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
            {
              WebkitAppearance: "none",
              margin: 0,
            },
        }}
      >
        <TextField
          label="Level"
          name="level"
          type="number"
          fullWidth
          onChange={handleChangeInput}
          value={plan.level}
          error={!!error.level}
          helperText={error.level}
          inputProps={{ min: 0 }}
        />

        <TextField
          label="Price"
          name="price"
          type="number"
          fullWidth
          onChange={handleChangeInput}
          value={plan.price}
          error={!!error.price}
          helperText={error.price}
          inputProps={{ min: 0 }}
        />

        <TextField
          label="Title"
          multiline
          fullWidth
          name="title"
          onChange={handleChangeInput}
          rows={3}
          value={plan.title}
          error={!!error.title}
          helperText={error.title}
        />
      </DialogContent>

      <DialogActions
        sx={{
          position: "relative",
          zIndex: 1,
          px: 3,
          py: 2.5,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(2, 6, 23, 0.35)",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleClose}
          sx={{
            borderRadius: "12px",
            color: "#e2e8f0",
            borderColor: "rgba(255,255,255,0.15)",
            px: 2.5,
            "&:hover": {
              borderColor: "#ff0055",
              background: "rgba(255,0,85,0.08)",
            },
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={addPlan}
          sx={{
            borderRadius: "12px",
            px: 3,
            fontWeight: 700,
            background: "linear-gradient(135deg, #ff0055, #7c3aed)",
            boxShadow: "0 10px 24px rgba(124,58,237,0.25)",
            "&:hover": {
              background: "linear-gradient(135deg, #ff1f6d, #8b5cf6)",
            },
          }}
        >
          {plan.id ? "EDIT" : "ADD"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
