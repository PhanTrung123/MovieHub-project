export const styleModalBg = {
  "& .MuiDialog-container": {
    backdropFilter: "blur(8px)",
    background: "rgba(2, 6, 23, 0.45)",
  },

  "& .MuiDialog-paper": {
    position: "relative",
    overflow: "hidden",
    borderRadius: "24px",
    background: "rgba(15, 23, 42, 0.92)",
    backdropFilter: "blur(22px)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow:
      "0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03)",
    color: "#fff",
  },

  "& .MuiDialog-paper::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at top left, rgba(255, 0, 102, 0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(99, 102, 241, 0.16), transparent 40%)",
    pointerEvents: "none",
  },

  "& .MuiDialogTitle-root": {
    color: "#fff",
    position: "relative",
    zIndex: 1,
  },

  "& .MuiDialogContent-root": {
    color: "#fff",
    position: "relative",
    zIndex: 1,
  },

  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.72)",
    transition: "color 180ms ease",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff",
  },

  "& .MuiOutlinedInput-root": {
    color: "#fff",
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: "14px",
    transition:
      "background-color 180ms ease, box-shadow 180ms ease, transform 180ms ease",
  },

  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.18)",
    transition: "border-color 180ms ease, box-shadow 180ms ease",
  },

  "& .MuiOutlinedInput-root:hover": {
    backgroundColor: "rgba(255,255,255,0.045)",
  },

  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.42)",
  },

  "& .MuiOutlinedInput-root.Mui-focused": {
    backgroundColor: "rgba(255,255,255,0.05)",
    boxShadow: "0 0 0 3px rgba(255,255,255,0.08)",
  },

  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffffff",
    borderWidth: "1px",
  },

  "& .MuiOutlinedInput-input": {
    color: "#fff",
    paddingTop: "14px",
    paddingBottom: "14px",
  },

  "& .MuiOutlinedInput-input::placeholder": {
    color: "rgba(255,255,255,0.45)",
    opacity: 1,
  },

  "& .MuiFormHelperText-root": {
    color: "#fca5a5",
    marginLeft: 0,
  },
};