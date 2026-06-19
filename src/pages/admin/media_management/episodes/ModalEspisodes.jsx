import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import { stylebg } from "../../../../utils/StyleContants";
import { ContextMovies } from "../../../../contexts/MovieProvider";
import { styleModalBg } from "../../../../utils/StyleModalContants";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalEspisodes({
  episode,
  open,
  handleClose,
  hanleChangeInput,
  addEpisode,
  error,
}) {
  const movies = React.useContext(ContextMovies);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        maxWidth="md"
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
          {episode.id ? "Modal Edit Espisode" : "Modal Add Espisode"}
        </DialogTitle>
        <DialogContent sx={stylebg}>
          <div className="">
            <TextField
              label="Episodes Number"
              type="number"
              name="episodesNumber"
              fullWidth
              sx={{ mt: 2 }}
              onChange={hanleChangeInput}
              value={episode.episodesNumber}
              error={!!error.episodesNumber}
              helperText={error.episodesNumber}
            />
            <TextField
              select
              label="Find the movie ID"
              variant="filled"
              name="movieID"
              fullWidth
              value={episode.movieID}
              onChange={hanleChangeInput}
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "#000",
                },
                mt: 2,
              }}
            >
              {movies.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Episodes Url"
              name="episodesUrl"
              fullWidth
              sx={{ mt: 2 }}
              onChange={hanleChangeInput}
              value={episode.episodesUrl}
              error={!!error.episodesUrl}
              helperText={error.episodesUrl}
            />
          </div>
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
          <Button variant="contained" color="primary" onClick={addEpisode}>
            {episode.id ? "EDIT" : "ADD"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
