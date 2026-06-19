import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { styleModalBg } from "../../../../utils/StyleModalContants";

export default function ModalChoose({
  openChoose,
  fullScreen,
  handleCloseChoose,
  searchChoose,
  dataChoose,
  type,
  handleChooes,
  dataSelect,
}) {
  const checkChoose = (id) => {
    return dataSelect.includes(id);
  };
  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={openChoose}
        onClose={handleCloseChoose}
        aria-labelledby="responsive-dialog-title"
        sx={styleModalBg}
      >
        <div className="p-4">
          <div className="flex justify-between">
            <h3>Choose {type}</h3>
            <div className="">
              <input
                type="text"
                placeholder="Enter keywords..."
                value={searchChoose}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {dataChoose.map((e) => (
              <div
                key={e.id}
                onClick={() => handleChooes(e.id, type)}
                className={`
    relative inline-flex items-center flex-col
    px-4 py-3 rounded-xl cursor-pointer
    transition-all duration-300 ease-out
    border
    ${
      checkChoose(e.id)
        ? "card-active text-white border-pink-500/30 shadow-lg shadow-pink-500/10"
        : "bg-white/5 backdrop-blur-md border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20"
    }
  `}
              >
                {type !== "categories" && (
                  <img
                    className="rounded-full w-12 h-12 mb-2 object-cover border border-white/10"
                    src={e.imgUrl}
                    alt=""
                  />
                )}

                <span className="text-sm font-medium tracking-wide">
                  {e.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <DialogActions>
          <Button onClick={handleCloseChoose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
