import SearchAdmin from "../../../../components/admin/SearchAdmin";
import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
import { useState } from "react";
import ModalCharacters from "./ModalCharacters";
import TableCharacters from "./TableCharacters";

const innnerCharacter = { name: "", description: "", imgUrl: "/logo.png" };
const Characters = () => {
  const [open, setOpen] = useState(false);
  const [character, setCharacter] = useState(innnerCharacter);
  const [error, setError] = useState(innnerCharacter);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const validation = () => {
    const newError = {};
    newError.name = character.name ? "" : "Please enter name input";
    newError.description = character.description
      ? ""
      : "Please enter description input";
    newError.imgUrl = character.imgUrl ? "" : "Please select an image";
    setError(newError);
    return Object.values(newError).some((e) => e !== "");
  };

  const handleClickOpen = () => {
    setOpen(true);
    setCharacter(innnerCharacter);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hanleChangeInput = (e) => {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  };

  const addCharacter = async () => {
    if (validation()) {
      return;
    }
    if (character.id) {
      await updateDocument("Characters", character);
    } else {
      await addDocument("Characters", character);
    }
    handleClose();
  };

  const hanleEdit = (row) => {
    handleClickOpen();
    setCharacter(row);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCharacter({ ...character, imgUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-5 max-md:p-0">
      <SearchAdmin
        handleClickOpen={handleClickOpen}
        title={"Characters"}
        handleSearch={handleSearch}
      />
      <ModalCharacters
        open={open}
        handleClose={handleClose}
        hanleChangeInput={hanleChangeInput}
        addCharacter={addCharacter}
        handleImageChange={handleImageChange}
        character={character}
        error={error}
      />
      <TableCharacters hanleEdit={hanleEdit} search={search} />
    </div>
  );
};

export default Characters;
