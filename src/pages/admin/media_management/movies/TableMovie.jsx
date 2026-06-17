import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useContext, useMemo, useState } from "react";
import { Chip, IconButton, Tooltip } from "@mui/material";
import { FaRegEdit, FaUsers } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import ModalDelete from "../../../../components/admin/ModalDelete";
import { deleteDocument } from "../../../../services/firebaseService";
import { ContextMovies } from "../../../../contexts/MovieProvider";
import { getOjectById } from "../../../../services/reponsitory";
import { ContextPlans } from "../../../../contexts/PlanProvider";
import { BiSolidCategory } from "react-icons/bi";
import { ContextCategories } from "../../../../contexts/CategoryProvider";
import { ContextActors } from "../../../../contexts/ActorProvider";
import { stylebg } from "../../../../utils/StyleContants";
import { ContextAuthors } from "../../../../contexts/AuthorProvider";
const paginationModel = { page: 0, pageSize: 5 };

export default function TableMovie({ handleEdit, search }) {
  const [open, setOpen] = useState(false);
  const [idDeleted, setIdDeleted] = useState(null);
  const movies = useContext(ContextMovies);
  const plans = useContext(ContextPlans);
  const authors = useContext(ContextAuthors);
  const categories = useContext(ContextCategories);
  const actors = useContext(ContextActors);
  const handleClickOpen = (id) => {
    setOpen(true);
    setIdDeleted(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleted = async () => {
    await deleteDocument("Movies", idDeleted);
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
    },

    {
      field: "imgUrl",
      headerName: "Poster",

      flex: 0.3,
      minWidth: 120,
      maxWidth: 160,
      sortable: false,
      filterable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div
          style={{
            width: 80,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={params.value}
            alt=""
            style={{
              width: 80,
              height: 90,
              objectFit: "cover",
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.1)",
              display: "block",
            }}
          />
        </div>
      ),
    },

    {
      field: "name",
      headerName: "Movie Name",
      headerAlign: "center",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <span
            style={{
              fontWeight: 600,
              color: "#f8fafc",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
              display: "block",
            }}
          >
            {params.value}
          </span>
        </Tooltip>
      ),
    },

    {
      field: "author",
      headerName: "Author",
      headerAlign: "center",
      width: 140,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <span
            style={{
              color: "#cbd5e1",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
              display: "block",
            }}
          >
            {getOjectById(authors, params.value)?.name}
          </span>
        </Tooltip>
      ),
    },

    {
      field: "planID",
      headerName: "Plan",
      width: 120,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Chip
          size="small"
          label={getOjectById(plans, params.value)?.title}
          sx={{
            bgcolor: "rgba(99,102,241,0.2)",
            color: "#fff",
            border: "1px solid rgba(99,102,241,0.4)",
            fontWeight: 600,

            "& .MuiChip-label": {
              color: "#fff",
            },
          }}
        />
      ),
    },

    {
      field: "duration",
      headerName: "Duration",
      width: 100,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <span style={{ color: "#cbd5e1" }}>{params.value} min</span>
      ),
    },

    {
      field: "listActor",
      headerName: "Actors",
      width: 100,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Tooltip
          title={
            <div className="p-2 grid grid-cols-2 gap-3 ">
              {params.value.map((id) => {
                const actor = getOjectById(actors, id);

                return (
                  <div
                    key={id}
                    className="flex items-center gap-2 bg-slate-800/70 px-2 py-1 rounded-md"
                  >
                    <img
                      src={actor.imgUrl}
                      alt={actor.name}
                      className="w-8 h-8 rounded-full object-cover border border-slate-600"
                    />
                    <span className="text-xs text-white truncate max-w-20">
                      {actor.name}
                    </span>
                  </div>
                );
              })}
            </div>
          }
        >
          <Chip
            size="small"
            icon={<FaUsers />}
            label={params.value.length}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.8,
              color: "#fff",
              "& .MuiChip-icon": {
                color: "#3b82f6",
              },
            }}
          />
        </Tooltip>
      ),
    },

    {
      field: "listCate",
      headerName: "Categories",
      width: 110,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Tooltip
          title={
            <div className="p-2 grid grid-cols-2 gap-3 ">
              {params.value.map((id) => {
                const category = getOjectById(categories, id);

                return (
                  <div
                    key={id}
                    className="bg-slate-800/70 px-3 py-1 rounded-full border border-slate-600 flex justify-center"
                  >
                    <span className="text-xs text-white truncate max-w-24 block">
                      {category.name}
                    </span>
                  </div>
                );
              })}
            </div>
          }
        >
          <Chip
            size="small"
            icon={<BiSolidCategory />}
            label={params.value.length}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.8,
              color: "#fff",
              "& .MuiChip-icon": {
                color: "#3b82f6",
              },
            }}
          />
        </Tooltip>
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
              onClick={() => handleEdit(params.row)}
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
    return movies.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [movies, search]);

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
          rowHeight={100}
          checkboxSelection={false}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          disableColumnResize
          sx={stylebg}
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
