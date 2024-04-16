export const formStyle = {
  "& .MuiFormLabel-root": {
    color: "#ffffff",
    fontFamily: "inherit",
  },
  "& .MuiInputBase-root": {
    borderRadius: "20px",
    fontSize: "20px",
    padding: "8px",
    fontFamily: "inherit",
    color: "#ffffff",
    "&:hover, &:focus": {
      borderColor: "#ffffff",
      boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #ffffff",
      "&:hover, &:focus": {
        borderColor: "#ffffff",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
      },
    },

    "& .MuiOutlinedInput-input::placeholder": {
      color: "rgba(255, 255, 255, 0.3)",
    },
    "& .MuiSvgIcon-root": {
      color: "#ffffff",
    },
    "& .MuiButtonBase-root": {
      background: "unset",
      boxShadow: "unset",
      transition: "unset",
      "&:hover, &:focus": {
        transform: "unset",
      },
    },
    "&:not(:first-of-type)": {
      marginTop: "16px",
    },
  },
};
