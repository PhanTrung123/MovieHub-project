import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useContext, useMemo, useState } from "react";
import { Button } from "@mui/material";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import ModalDelete from "../../../../components/admin/ModalDelete";
import { deleteDocument } from "../../../../services/firebaseService";
import { ContextAuthors } from "../../../../contexts/AuthorProvider";

const paginationModel = { page: 0, pageSize: 5 };

export default function TableAuthors({ hanleEdit, search }) {
  const [open, setOpen] = useState(false);
  const [idDeleted, setIdDeleted] = useState(null);
  const authors = useContext(ContextAuthors);
  const handleClickOpen = (id) => {
    setOpen(true);
    setIdDeleted(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleted = async () => {
    await deleteDocument("Authors", idDeleted);
    handleClose();
  };

  const columns = [
    {
      field: "index",
      headerName: "ID",
      width: 80,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "left",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      headerAlign: "center",
      align: "left",
    },
    {
      field: "imgUrl",
      headerName: "Image",
      flex: 1,
      minWidth: 140,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={params.value}
            style={{
              width: 45,
              height: 45,
              borderRadius: 10,
              objectFit: "cover",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      sortable: false,
      align: "center",
      renderCell: (params) => (
        <div className="flex gap-3 items-center justify-center h-full">
          <Button
            sx={{
              minWidth: 0,
              bgcolor: "#3b82f6",
              p: {
                xs: "8px",
                sm: "10px",
              },
            }}
            onClick={() => hanleEdit(params.row)}
          >
            <FaRegEdit size={window.innerWidth < 600 ? 20 : 16} color="white" />
          </Button>

          <Button
            sx={{
              minWidth: 0,
              backgroundColor: "#ef4444",
              p: {
                xs: "8px",
                sm: "10px",
              },
            }}
            onClick={() => handleClickOpen(params.row.id)}
          >
            <FaTrashCan
              size={window.innerWidth < 600 ? 20 : 16}
              color="white"
            />
          </Button>
        </div>
      ),
    },
  ];
  const dataSearch = useMemo(() => {
    return authors.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [authors, search]);

  return (
    <div className="mt-5">
      <Paper
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 4,
          background: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",

          "&::before, &::after": {
            content: '""',
            position: "absolute",
            zIndex: 0,
          },
          "&::before": {
            inset: 0,
            background:
              "radial-gradient(circle at top, rgba(255,0,102,0.25), transparent 40%), radial-gradient(circle at bottom, rgba(99,102,241,0.2), transparent 50%)",
            pointerEvents: "none",
          },
          "&::after": {
            top: 0,
            right: 0,
            width: 2,
            height: "100%",
            background:
              "linear-gradient(to bottom, transparent, #ff0055, #7c3aed, transparent)",
            boxShadow: "0 0 10px #ff0055, 0 0 20px #7c3aed",
          },
          "& .MuiDataGrid-root, & .MuiDataGrid-main": {
            border: "none",
            overflow: "hidden",
            borderRadius: "inherit",
          },
        }}
      >
        <DataGrid
          columns={columns}
          rows={dataSearch.map((p, index) => ({
            ...p,
            index: index + 1,
          }))}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection={false}
          disableColumnResize
          sx={{
            position: "relative",
            zIndex: 1,
            color: "#e2e8f0",
            bgcolor: "transparent",
            border: "1px solid rgba(255,255,255,.15)",

            "& .MuiDataGrid-main, & .MuiDataGrid-virtualScroller, & .MuiDataGrid-filler":
              {
                bgcolor: "transparent",
              },

            "& .MuiDataGrid-columnHeaders": {
              bgcolor: "rgba(255,255,255,.02)",
              backdropFilter: "blur(10px)",
              borderBottom: "1px solid rgba(255,255,255,.08)",
            },

            "& .MuiDataGrid-columnHeader": {
              bgcolor: "transparent",
            },

            "& .MuiDataGrid-columnHeaderTitle": {
              color: "#fff",
              fontWeight: 600,
            },

            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid rgba(255,255,255,.05)",
            },

            "& .MuiDataGrid-row:hover": {
              bgcolor: "rgba(255,0,102,.08)",
            },

            "& .MuiDataGrid-row.Mui-selected": {
              bgcolor: "rgba(255,0,102,.15) !important",
            },

            "& .MuiDataGrid-row.Mui-selected:hover": {
              bgcolor: "rgba(255,0,102,.22) !important",
            },

            "& .MuiDataGrid-footerContainer": {
              bgcolor: "rgba(255,255,255,.02)",
              borderTop: "1px solid rgba(255,255,255,.08)",
            },

            "& .MuiTablePagination-root, \
     .MuiTablePagination-toolbar, \
     .MuiTablePagination-selectLabel, \
     .MuiTablePagination-displayedRows, \
     .MuiTablePagination-select, \
     .MuiSvgIcon-root": {
              color: "#fff",
            },

            "& .MuiDataGrid-menuIconButton, \
     .MuiDataGrid-sortIcon, \
     .MuiDataGrid-iconButtonContainer button": {
              color: "#fff !important",
              backgroundColor: "transparent !important",
            },

            "& .MuiDataGrid-iconButtonContainer": {
              visibility: "visible",
            },
            "& .MuiDataGrid-sortIcon": {
              opacity: 1,
              color: "#fff",
            },
            "& .MuiDataGrid-menuIcon": {
              display: "none",
            },

            "& .MuiDataGrid-columnHeader:focus, \
     .MuiDataGrid-columnHeader:focus-within, \
     .MuiDataGrid-cell:focus, \
     .MuiDataGrid-cell:focus-within": {
              outline: "none",
              boxShadow: "none",
            },

            "& .MuiDataGrid-columnHeader--sorted": {
              backgroundColor: "transparent !important",
            },
          }}
        />
      </Paper>
      <ModalDelete
        open={open}
        handleClose={handleClose}
        handleDeleted={handleDeleted}
      />
    </div>
  );
}
