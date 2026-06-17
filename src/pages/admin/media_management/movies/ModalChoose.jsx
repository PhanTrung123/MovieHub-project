import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

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
                onClick={() => handleChooes(e.id,type)}
                className={`inline-flex items-center flex-col px-4 py-2 border border-gray-400 rounded-md cursor-pointer w-fit whitespace-nowrap ${checkChoose(e.id) ? "bg-[#0A0E17] card-active text-white" : "bg-gray-200"}`}
              >
                {type !== "categories" && (
                  <img
                    className="rounded-full w-10 h-10 mb-1"
                    src={e.imgUrl}
                    alt=""
                  />
                )}

                <span className="text-sm font-medium">{e.name}</span>
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
