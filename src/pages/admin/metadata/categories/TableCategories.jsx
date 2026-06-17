import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useContext, useMemo, useState } from "react";
import { ContextCategories } from "../../../../contexts/CategoryProvider";
import {  Chip, IconButton, Tooltip } from "@mui/material";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import ModalDelete from "../../../../components/admin/ModalDelete";
import { deleteDocument } from "../../../../services/firebaseService";

const paginationModel = { page: 0, pageSize: 5 };

export default function TableCategories({ hanleEdit, search }) {
  const [open, setOpen] = useState(false);
  const [idDeleted, setIdDeleted] = useState(null);
  const categories = useContext(ContextCategories);
  const handleClickOpen = (id) => {
    setOpen(true);
    setIdDeleted(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleted = async () => {
    await deleteDocument("Categories", idDeleted);
    handleClose();
  };

  const isMobile = window.innerWidth < 600;

  const columns = [
    {
      field: "index",
      headerName: "ID",
      width: 80,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          sx={{
            bgcolor: "rgba(99,102,241,0.2)",
            color: "#a5b4fc",
            fontWeight: 600,
            border: "1px solid rgba(99,102,241,0.4)",
          }}
        />
      ),
    },

    {
      field: "name",
      headerName: "Name",
      flex: isMobile ? 1.2 : 1,
      minWidth: isMobile ? 120 : 180,
      headerAlign: "center",
      align: "left",
      renderCell: (params) => (
        <div
          style={{
            fontWeight: 600,
            color: "#f8fafc",
            fontSize: 14,
          }}
        >
          {params.value}
        </div>
      ),
    },

    {
      field: "description",
      headerName: "Description",
      flex: isMobile ? 2 : 3,
      minWidth: isMobile ? 160 : 300,
      headerAlign: "center",
      align: "left",
      renderCell: (params) => (
        <div
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "#cbd5e1",
            fontSize: 13,
            lineHeight: 1.4,
          }}
        >
          {params.value}
        </div>
      ),
    },

    {
      field: "action",
      headerName: "Action",
      width: isMobile ? 120 : 160,
      headerAlign: "center",
      sortable: false,
      align: "center",
      renderCell: (params) => (
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          <Tooltip title="Edit">
            <IconButton
              onClick={() => hanleEdit(params.row)}
              sx={{
                bgcolor: "rgba(59,130,246,0.15)",
                color: "#60a5fa",
                border: "1px solid rgba(59,130,246,0.3)",
                "&:hover": {
                  bgcolor: "rgba(59,130,246,0.35)",
                  boxShadow: "0 0 12px rgba(59,130,246,0.4)",
                },
              }}
            >
              <FaRegEdit size={16} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton
              onClick={() => handleClickOpen(params.row.id)}
              sx={{
                bgcolor: "rgba(239,68,68,0.15)",
                color: "#f87171",
                border: "1px solid rgba(239,68,68,0.3)",
                "&:hover": {
                  bgcolor: "rgba(239,68,68,0.35)",
                  boxShadow: "0 0 12px rgba(239,68,68,0.4)",
                },
              }}
            >
              <FaTrashCan size={16} />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];
  const dataSearch = useMemo(() => {
    return categories.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [categories, search]);

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

          "& .MuiDataGrid-columnHeaderTitle": {
            fontSize: "13px",
            letterSpacing: "0.5px",
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
              display: "flex",
              alignItems: "center",
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
