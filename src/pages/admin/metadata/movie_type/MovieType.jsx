import React, { useState } from "react";
import SearchAdmin from "../../../../components/admin/SearchAdmin";
import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
import TableMovieType from "./TableMovieType";
import ModalMovieType from "./ModalMovieType";

const innnerTypeMovie = { name: "", description: "" };
function MovieType() {
  const [open, setOpen] = React.useState(false);
  const [movieType, setMovieType] = useState(innnerTypeMovie);
  const [error, setError] = useState(innnerTypeMovie);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const validation = () => {
    const newError = {};
    newError.name = movieType.name ? "" : "Please enter name input";
    newError.description = movieType.description
      ? ""
      : "Please enter description input";
    setError(newError);
    return Object.values(newError).some((e) => e !== "");
  };

  const handleClickOpen = () => {
    setOpen(true);
    setMovieType(innnerTypeMovie);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hanleChangeInput = (e) => {
    setMovieType({ ...movieType, [e.target.name]: e.target.value });
  };

  const addMovieType = async () => {
    if (validation()) {
      return;
    }
    if (movieType.id) {
      await updateDocument("Movie_types", movieType);
    } else {
      await addDocument("Movie_types", movieType);
    }
    handleClose();
  };

  const hanleEdit = (row) => {
    handleClickOpen();
    setMovieType(row);
  };

  return (
    <div className="p-5 max-md:p-0">
      <SearchAdmin
        handleClickOpen={handleClickOpen}
        title={"Movie Types"}
        handleSearch={handleSearch}
      />
      <ModalMovieType
        open={open}
        handleClose={handleClose}
        hanleChangeInput={hanleChangeInput}
        addMovieType={addMovieType}
        movieType={movieType}
        error={error}
      />
      <TableMovieType hanleEdit={hanleEdit} search={search} />
    </div>
  );
}

export default MovieType;
