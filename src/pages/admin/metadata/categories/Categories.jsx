import React, { useState } from "react";
import SearchAdmin from "../../../../components/admin/SearchAdmin";
import ModalCategory from "./ModalCategory";
import { addDocument, updateDocument } from "../../../../services/firebaseService";
import TableCategories from "./TableCategories";

const innner = { name: "", description: "" };
function Categories() {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = useState(innner);

  const handleClickOpen = () => {
    setOpen(true);
    setCategory(innner);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hanleChangeInput = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const addCategory = async () => {
    console.log(category);
     if(category.id) {
          await updateDocument("Categories", category);
     }else {
       await addDocument("Categories", category);
     }
    handleClose();
  };

  const hanleEdit = (row) => {
      handleClickOpen();
      setCategory(row);
  }
  return (
    <div className="p-5 max-md:p-0">
      <SearchAdmin handleClickOpen={handleClickOpen} />
      <ModalCategory
        open={open}
        handleClose={handleClose}
        hanleChangeInput={hanleChangeInput}
        addCategory={addCategory}
        category={category}
      />
     <TableCategories hanleEdit={hanleEdit} />
    </div>
  );
}

export default Categories;
