export const formStyle = {
  mb: 1,
  mt: 1,
  "& .MuiFormLabel-root": {
    color: "#ffffff",
    fontFamily: "inherit",
    "&:hover, &:focus": { color: "#ffffff", fontFamily: "inherit" },
  },
  "& .MuiFormControl-root": {
    "&:hover, &:focus": {
      borderColor: "#ffffff",
      boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
    },
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
    },
    "& .MuiSvgIcon-root": {
      color: "#ffffff",
    },
    "& .MuiButtonBase-root": {
      background: "unset",
      boxShadow: "unset",
      transition: "unset",
      marginRight: "8px",
      "&:hover, &:focus": {
        transform: "unset",
      },
    },
    "&:not(:first-of-type)": {
      marginTop: "16px",
    },
  },
};
