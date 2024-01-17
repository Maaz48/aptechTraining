import React from "react";
import { TextField } from "@mui/material";

const Inputcomp = ({ changeValue, placeholder, variant, value, ...props }) => {
  console.log(value);
  return (
    <TextField
      onChange={(e) => {
        changeValue(e.target.value);
      }}
      placeholder={placeholder}
      variant={variant}
      value={value}
        {...props}
    />
  );
};

export default Inputcomp;
