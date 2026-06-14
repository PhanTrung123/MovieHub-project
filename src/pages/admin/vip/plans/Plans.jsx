import { useState } from "react";
import ModalPlans from "./ModalPlans";
import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
import TablePlans from "./TablePlans";
import SearchAdmin from "../../../../components/admin/SearchAdmin";

const innnerPlan = { level: "", price: "", title: "" };
const Plans = () => {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState(innnerPlan);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(innnerPlan);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const validation = () => {
    const newError = {};
    newError.level =
      plan.level === "" || Number(plan.level) < 0
        ? "Level must be a number >= 0"
        : "";
    newError.price =
      plan.price === "" || Number(plan.price) < 0
        ? "Price must be a number >= 0"
        : "";
    newError.title = plan.title ? "" : "Please enter title input";
    setError(newError);
    return Object.values(newError).some((e) => e !== "");
  };

  const handleClickOpen = () => {
    setOpen(true);
    setPlan(innnerPlan);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeInput = (e) => {
    setPlan({ ...plan, [e.target.name]: e.target.value });
  };

  const addPlan = async () => {
    if (validation()) {
      return;
    }
    if (plan.id) {
      await updateDocument("Plans", plan);
    } else {
      await addDocument("Plans", plan);
    }
    handleClose();
  };

  const handleEdit = (row) => {
    handleClickOpen();
    setPlan(row);
  };

  return (
    <div className="p-5 max-md:p-0">
      <SearchAdmin
        handleClickOpen={handleClickOpen}
        title={"Plans"}
        handleSearch={handleSearch}
      />
      <ModalPlans
        open={open}
        handleClose={handleClose}
        handleChangeInput={handleChangeInput}
        addPlan={addPlan}
        plan={plan}
        error={error}
      />
      <TablePlans hanleEdit={handleEdit} search={search} />
    </div>
  );
};

export default Plans;
