import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { styleModalBg } from "../../../../utils/StyleModalContants";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalAuthors({
  author,
  open,
  handleClose,
  hanleChangeInput,
  addAuthor,
  error,
  handleImageChange,
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
        sx={styleModalBg}
      >
        <DialogTitle>
          {" "}
          {author.id ? "Modal Edit Author" : "Modal Add Author"}
        </DialogTitle>
        <DialogContent className="flex flex-col gap-3 ">
          <TextField
            label="Name"
            name="name"
            fullWidth
            sx={{ mt: 2 }}
            onChange={hanleChangeInput}
            value={author.name}
            error={!!error.name}
            helperText={error.name}
          />
          <TextField
            label="Description"
            multiline
            fullWidth
            name="description"
            sx={{ mt: 2 }}
            onChange={hanleChangeInput}
            rows={2}
            value={author.description}
            error={!!error.description}
            helperText={error.description}
          />
          <div className="mt-4 w-full">
            <label>Upload image</label>
            <div className="flex items-center gap-3">
              <label className="">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <div className="px-4 py-2 mt-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition">
                  Choose file
                </div>
              </label>
              <span className="text-sm text-slate-500">
                {error.imgUrl ? (
                  <span className="text-red-500">{error.imgUrl}</span>
                ) : (
                  "No file selected"
                )}
              </span>
            </div>
          </div>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 220,
                height: 220,
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                backgroundColor: "#f8fafc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 1,
              }}
            >
              <img
                src={author.imgUrl}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
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
          <Button variant="contained" color="primary" onClick={addAuthor}>
            {author.id ? "EDIT" : "ADD"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
