import SearchAdmin from "../../../../components/admin/SearchAdmin";
import ModalAuthors from "./ModalAuthors";
import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
import { useState } from "react";
import TableAuthors from "./TableAuthors";

const innnerAuthor = { name: "", description: "", imgUrl: "/logo.png" };
const Authors = () => {
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState(innnerAuthor);
  const [error, setError] = useState(innnerAuthor);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const validation = () => {
    const newError = {};
    newError.name = author.name ? "" : "Please enter name input";
    newError.description = author.description
      ? ""
      : "Please enter description input";
    newError.imgUrl = author.imgUrl ? "" : "Please select an image";
    setError(newError);
    return Object.values(newError).some((e) => e !== "");
  };

  const handleClickOpen = () => {
    setOpen(true);
    setAuthor(innnerAuthor);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hanleChangeInput = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };

  const addAuthor = async () => {
    if (validation()) {
      return;
    }
    if (author.id) {
      await updateDocument("Authors", author);
    } else {
      await addDocument("Authors", author);
    }
    handleClose();
  };

  const hanleEdit = (row) => {
    handleClickOpen();
    setAuthor(row);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAuthor({ ...author, imgUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-5 max-md:p-0">
      <SearchAdmin
        handleClickOpen={handleClickOpen}
        title={"Authors"}
        handleSearch={handleSearch}
      />
      <ModalAuthors
        open={open}
        handleClose={handleClose}
        hanleChangeInput={hanleChangeInput}
        addAuthor={addAuthor}
        handleImageChange={handleImageChange}
        author={author}
        error={error}
      />
      <TableAuthors hanleEdit={hanleEdit} search={search} />
    </div>
  );
};

export default Authors;
