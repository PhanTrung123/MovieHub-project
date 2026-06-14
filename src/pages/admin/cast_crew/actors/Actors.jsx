import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
import { useState } from "react";
import ModalActors from "./ModalActors";
import TableActors from "./TableActors";
import SearchAdmin from "../../../../components/admin/SearchAdmin";

const innnerActor = { name: "", description: "", imgUrl: "/logo.png" };
const Actors = () => {
  const [open, setOpen] = useState(false);
  const [actor, setActor] = useState(innnerActor);
  const [error, setError] = useState(innnerActor);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const validation = () => {
    const newError = {};
    newError.name = actor.name ? "" : "Please enter name input";
    newError.description = actor.description
      ? ""
      : "Please enter description input";
    newError.imgUrl = actor.imgUrl ? "" : "Please select an image";
    setError(newError);
    return Object.values(newError).some((e) => e !== "");
  };

  const handleClickOpen = () => {
    setOpen(true);
    setActor(innnerActor);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hanleChangeInput = (e) => {
    setActor({ ...actor, [e.target.name]: e.target.value });
  };

  const addActor = async () => {
    if (validation()) {
      return;
    }
    if (actor.id) {
      await updateDocument("Actors", actor);
    } else {
      await addDocument("Actors", actor);
    }
    handleClose();
  };

  const hanleEdit = (row) => {
    handleClickOpen();
    setActor(row);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setActor({ ...actor, imgUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-5 max-md:p-0">
      <SearchAdmin
        handleClickOpen={handleClickOpen}
        title={"Actors"}
        handleSearch={handleSearch}
      />
      <ModalActors
        open={open}
        handleClose={handleClose}
        hanleChangeInput={hanleChangeInput}
        addActor={addActor}
        handleImageChange={handleImageChange}
        actor={actor}
        error={error}
      />
      <TableActors hanleEdit={hanleEdit} search={search} />
    </div>
  );
};

export default Actors;
