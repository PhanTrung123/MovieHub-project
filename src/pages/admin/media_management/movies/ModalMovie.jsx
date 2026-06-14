import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import { MdCategory } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LISTCOUNTRIES } from "../../../../utils/Contants";
import { ContextAuthors } from "../../../../contexts/AuthorProvider";
import { ContextPlans } from "../../../../contexts/PlanProvider";
import ModalChoose from "./ModalChoose";
import { ContextCategories } from "../../../../contexts/CategoryProvider";
import { ContextCharacters } from "../../../../contexts/CharacterProvider";
import { ContextActors } from "../../../../contexts/ActorProvider";
import { ContextMovieTypes } from "../../../../contexts/MovieTypeProvider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalMovie({
  movie,
  open,
  handleClose,
  hanleChangeInput,
  addMovie,
  error,
  setMovie,
}) {
  const authors = React.useContext(ContextAuthors);
  const plans = React.useContext(ContextPlans);
  const categories = React.useContext(ContextCategories);
  const characters = React.useContext(ContextCharacters);
  const actors = React.useContext(ContextActors);
  const movieTypes = React.useContext(ContextMovieTypes);

  const [type, setType] = React.useState("");
  const [dataChoose, setDataChoose] = React.useState([]);

  const [openChoose, setOpenChoose] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpenChoose = () => {
    setOpenChoose(true);
  };

  const handleCloseChoose = () => {
    setOpenChoose(false);
  };

  const handleDataChoose = (type) => {
    switch (type) {
      case "categories":
        setDataChoose(categories);
        break;
      case "actors":
        setDataChoose(actors);
        break;
      case "characters":
        setDataChoose(characters);
        break;
    }
    handleClickOpenChoose();
    setType(type);
  };

  const handleChooes = (id) => {
    switch (type) {
      case "categories":
        setMovie((pre) => {
          return { ...movie, listCate: toggleChooes(pre.listCate, id) };
        });
        break;
      case "actors":
        setMovie((pre) => {
          return { ...movie, listActor: toggleChooes(pre.listActor, id) };
        });
        break;
      case "characters":
        setMovie((pre) => {
          return {
            ...movie,
            listCharacter: toggleChooes(pre.listCharacter, id),
          };
        });
        break;
    }
  };

  const toggleChooes = (data, id) => {
    return data.includes(id) ? data.filter((e) => e != id) : [...data, id];
  };

  const getSelectChoose = () => {
    switch (type) {
      case "categories":
        return movie.listCate;
      case "actors":
        return movie.listActor;
      case "characters":
        return movie.listCharacter;
    }
  };

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
      >
        <DialogTitle>
          {" "}
          {movie.id ? "Modal Edit Movie" : "Modal Add Movie"}
        </DialogTitle>
        <DialogContent className="grid grid-cols-2 max-md:grid-cols-1 gap-3 ">
          <div className="">
            <TextField
              label="Name"
              name="name"
              fullWidth
              sx={{ mt: 2 }}
              onChange={hanleChangeInput}
              value={movie.name}
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
              rows={3}
              value={movie.description}
              error={!!error.description}
              helperText={error.description}
            />
            <div className="flex gap-3 items-center">
              <TextField
                label="Duration"
                multiline
                fullWidth
                name="duration"
                sx={{ mt: 2 }}
                onChange={hanleChangeInput}
                value={movie.duration}
                error={!!error.duration}
                helperText={error.duration}
              />
              <TextField
                label="Rent"
                type="number"
                fullWidth
                name="rent"
                sx={{ mt: 2 }}
                onChange={hanleChangeInput}
                value={movie.rent}
                error={!!error.rent}
                helperText={error.rent}
                slotProps={{
                  htmlInput: {
                    min: 0,
                  },
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <TextField
                select
                label="Find the plan"
                variant="filled"
                name="planID"
                onChange={hanleChangeInput}
              >
                {plans.map((option) => (
                  <MenuItem value={option.id}>{option.title}</MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Find movie type"
                variant="filled"
                name="typeID"
                onChange={hanleChangeInput}
              >
                {movieTypes.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="filled-select-currency"
                select
                label="Find the author"
                variant="filled"
                name="author"
                onChange={hanleChangeInput}
              >
                {authors.map((option) => (
                  <MenuItem value={option.name}>{option.name}</MenuItem>
                ))}
              </TextField>
              <TextField
                id="filled-select-currency"
                select
                label="Find the country"
                variant="filled"
                name="country"
                onChange={hanleChangeInput}
              >
                {LISTCOUNTRIES.map((option) => (
                  <MenuItem key={option.code} value={option.code}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => handleDataChoose("categories")}
                >
                  <h5>Categories</h5>
                  <div className="px-3 py-2 rounded-[5px] bg-slate-900 text-white flex items-center">
                    <MdCategory />
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-2">
                  <div className="relative px-3 py-1 bg-gray-200 border border-gray-400 rounded-md">
                    <span className="text-sm ">Thể thao</span>
                    <button className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold">
                      <IoClose />
                    </button>
                  </div>

                  <div className="relative px-3 py-1 bg-gray-200 border border-gray-400 rounded-md">
                    <span className="text-sm ">Gián điệp</span>
                    <button className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold">
                      <IoClose />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => handleDataChoose("actors")}
                >
                  <h5>Actors</h5>
                  <div className="px-3 py-2 rounded-[5px] bg-slate-900 text-white flex items-center">
                    <FaUser />
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-start mt-3">
                  <div className="relative inline-block">
                    <div className="w-10 h-10 rounded-full overflow-hidden  bg-gray-200">
                      <img
                        src="/logo.png"
                        alt="image-actor"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <button className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold">
                      <IoClose />
                    </button>
                  </div>
                  <div className="relative inline-block">
                    <div className="w-10 h-10 rounded-full overflow-hidden  bg-gray-200">
                      <img
                        src="/logo.png"
                        alt="image-actor"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <button className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold">
                      <IoClose />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div
                  className="flex items-center gap-2"
                  onClick={() => handleDataChoose("characters")}
                >
                  <h5>Character</h5>
                  <div className="px-3 py-2 rounded-[5px] bg-slate-900 text-white flex items-center">
                    <FaUser />
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-start mt-3">
                  <div className="relative inline-block">
                    <div className="w-10 h-10 rounded-full overflow-hidden  bg-gray-200">
                      <img
                        src="/logo.png"
                        alt="image-actor"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <button className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold">
                      <IoClose />
                    </button>
                  </div>
                  <div className="relative inline-block">
                    <div className="w-10 h-10 rounded-full overflow-hidden  bg-gray-200">
                      <img
                        src="/logo.png"
                        alt="image-actor"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <button className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold">
                      <IoClose />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 w-full">
                <label>Upload image</label>
                <div className="flex items-center gap-3">
                  <label className="">
                    <input type="file" accept="image/*" className="hidden" />
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
                    src="/public/logo.png"
                    alt="Preview"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            </div>
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
          <Button variant="contained" color="primary" onClick={addMovie}>
            {movie.id ? "EDIT" : "ADD"}
          </Button>
        </DialogActions>
      </Dialog>
      <ModalChoose
        openChoose={openChoose}
        fullScreen={fullScreen}
        handleCloseChoose={handleCloseChoose}
        dataChoose={dataChoose}
        type={type}
        handleChooes={handleChooes}
        dataSelect={getSelectChoose()}
      />
    </React.Fragment>
  );
}
