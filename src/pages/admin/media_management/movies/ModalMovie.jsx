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
import { getOjectById } from "../../../../services/reponsitory";
import { stylebg } from "../../../../utils/StyleContants";

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
  handleImageChange,
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

  const handleChooes = (id, type) => {
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
        <DialogContent
          sx={stylebg}
          className="grid grid-cols-2 max-md:grid-cols-1 gap-3 "
        >
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
                sx={{
                  "& .MuiSelect-icon": {
                    color: "#000",
                  },
                }}
                value={movie.planID}
              >
                {plans.map((option) => (
                  <MenuItem key={option.id} value={option.id}>{option.title}</MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Find movie type"
                variant="filled"
                name="typeID"
                onChange={hanleChangeInput}
                value={movie.typeID}
                 sx={{
                  "& .MuiSelect-icon": {
                    color: "#000",
                  },
                }}
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
                value={movie.author}
                 sx={{
                  "& .MuiSelect-icon": {
                    color: "#000",
                  },
                }}
              >
                {authors.map((option) => (
                  <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                ))}
              </TextField>
              <TextField
                id="filled-select-currency"
                select
                label="Find the country"
                variant="filled"
                name="country"
                onChange={hanleChangeInput}
                value={movie.country}
                 sx={{
                  "& .MuiSelect-icon": {
                    color: "#000",
                  },
                }}
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
                  value={movie.listCate}
                >
                  <h5 className="text-black">Categories</h5>
                  <div className="px-3 py-2 rounded-[5px] bg-slate-900 text-white flex items-center">
                    <MdCategory />
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-2">
                  {movie.listCate.map((id) => (
                    <div className="relative px-3 py-1 bg-gray-200 border border-gray-400 rounded-md">
                      <span className="text-sm font-medium text-black ">
                        {getOjectById(categories, id).name}
                      </span>
                      <button
                        onClick={() => handleChooes(id, "categories")}
                        className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold"
                      >
                        <IoClose />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => handleDataChoose("actors")}
                >
                  <h5 className="text-black">Actors</h5>
                  <div className="px-3 py-2 rounded-[5px] bg-slate-900 text-white flex items-center">
                    <FaUser />
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-start mt-3">
                  {movie.listActor.map((id) => (
                    <div className="relative inline-block">
                      <div className="w-10 h-10 rounded-full overflow-hidden  bg-gray-200">
                        <img
                          src={getOjectById(actors, id).imgUrl}
                          alt="image-actor"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <button
                        onClick={() => handleChooes(id, "actors")}
                        className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold"
                      >
                        <IoClose />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <div
                  className="flex items-center gap-2"
                  onClick={() => handleDataChoose("characters")}
                >
                  <h5 className="text-black">Characters</h5>
                  <div className="px-3 py-2 rounded-[5px] bg-slate-900 text-white flex items-center">
                    <FaUser />
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-start mt-3">
                  {movie.listCharacter.map((id) => (
                    <div className="relative inline-block">
                      <div className="w-10 h-10 rounded-full overflow-hidden  bg-gray-200">
                        <img
                          src={getOjectById(characters, id).imgUrl}
                          alt="image-actor"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <button
                        onClick={() => handleChooes(id, "characters")}
                        className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold"
                      >
                        <IoClose />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 w-full">
                <label  className="text-black">Upload image</label>
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
                    No file selected
                  </span>
                </div>
              </div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={movie.imgUrl}
                  alt="Preview"
                  className="h-35 w-27 rounded-xl object-contain"
                />
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
