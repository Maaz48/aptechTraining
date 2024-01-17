import { Button } from "@mui/material";
import React from "react";

const Buttoncomp = ({ value, click, variant, ...props }) => {
  return (
    <Button onClick={click} variant={variant} {...props}>
      {value}
    </Button>
  );
};

export default Buttoncomp;
