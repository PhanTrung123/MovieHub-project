import { useState } from "react";
import SearchAdmin from "../../../../components/admin/SearchAdmin";
import ModalMovie from "./ModalMovie";
import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
import TableMovie from "./TableMovie";

const innnerMovie = {
  name: "",
  description: "",
  duration: "",
  listCate: [],
  country: "",
  author: "",
  listActor: [],
  listCharacter: [],
  planID: "",
  typeID: "",
  rent: "",
  imgUrl: "/logo.png",
};
function Movies() {
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState(innnerMovie);
  const [error, setError] = useState(innnerMovie);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const validation = () => {
    const newError = {
      name: movie.name?.trim() ? "" : "Please enter movie name",
      description: movie.description?.trim() ? "" : "Please enter description",
      duration: movie.duration ? "" : "Please enter duration",
      planID: movie.planID ? "" : "Please select a plan",
      typeID: movie.typeID ? "" : "Please select movie type",
      author: movie.author ? "" : "Please select an author",
      country: movie.country ? "" : "Please select a country",
      listCate:
        movie.listCate?.length > 0
          ? ""
          : "Please select at least one category",
      listActor:
        movie.listActor?.length > 0 ? "" : "Please select at least one actor",
      listCharacter:
        movie.listCharacter?.length > 0
          ? ""
          : "Please select at least one character",
      rent: movie.rent > 0 ? "" : "Please select a rent",
      imgUrl: movie.imgUrl ? "" : "Please select an image",
    };

    setError(newError);

    return Object.values(newError).some((e) => e !== "");
  };

  const handleClickOpen = () => {
    setOpen(true);
    setMovie(innnerMovie);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hanleChangeInput = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const addMovie = async () => {

    if (validation()) {
      console.log(error);
      
      return;
    }
    if (movie.id) {
      await updateDocument("Movies", movie);
    } else {
      await addDocument("Movies", movie);
    }
    handleClose();
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMovie({ ...movie, imgUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

   const handleEdit = (row) => {
    handleClickOpen();
    setMovie(row);
  };

  return (
    <div className="p-5 max-md:p-0">
      <SearchAdmin
        handleSearch={handleSearch}
        handleClickOpen={handleClickOpen}
        title={"Movie"}
      />
      <ModalMovie
        open={open}
        handleClose={handleClose}
        hanleChangeInput={hanleChangeInput}
        addMovie={addMovie}
        handleImageChange={handleImageChange}
        movie={movie}
        error={error}
        setMovie={setMovie}
      />
      <TableMovie handleEdit={handleEdit} search={search} />
    </div>
  );
}

export default Movies;
