export const stylebg = {
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
              borderBottom: "none",
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
}