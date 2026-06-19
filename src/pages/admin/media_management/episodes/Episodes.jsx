import { useState } from "react";
import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
import SearchAdmin from "../../../../components/admin/SearchAdmin";
import ModalEspisodes from "./ModalEspisodes";
import TableEpisodes from "./TableEpisodes";

const innnerEpisode = {
  episodesNumber: "",
  movieID: "",
  episodesUrl: "",
};
function Episodes() {
  const [open, setOpen] = useState(false);
  const [episode, setEpisode] = useState(innnerEpisode);
  const [error, setError] = useState(innnerEpisode);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const validation = () => {
    const newError = {};
    newError.episodesNumber =
      episode.episodesNumber === "" || Number(episode.episodesNumber) < 0
        ? "Episodes number must be a number > 0"
        : "";
    newError.episodesUrl = episode.episodesUrl
      ? ""
      : "Please enter episodes Url input";
    setError(newError);
    return Object.values(newError).some((e) => e !== "");
  };

  const handleClickOpen = () => {
    setOpen(true);
    setEpisode(innnerEpisode);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hanleChangeInput = (e) => {
    setEpisode({ ...episode, [e.target.name]: e.target.value });
  };

  const addEpisode = async () => {
    if (validation()) {
      console.log(error);

      return;
    }
    if (episode.id) {
      await updateDocument("Episodes", episode);
    } else {
      await addDocument("Episodes", episode);
    }
    handleClose();
  };

  const handleEdit = (row) => {
    handleClickOpen();
    setEpisode(row);
  };

  return (
    <div className="p-5 max-md:p-0">
      <SearchAdmin
        handleSearch={handleSearch}
        handleClickOpen={handleClickOpen}
        title={"Episode"}
      />
      <ModalEspisodes
        open={open}
        handleClose={handleClose}
        hanleChangeInput={hanleChangeInput}
        addEpisode={addEpisode}
        error={error}
        episode={episode}
        setEpisode={setEpisode}
      />
      <TableEpisodes handleEdit={handleEdit} search={search} />
    </div>
  );
}

export default Episodes;
