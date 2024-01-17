import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Inputcomp from "../reuseable/inputcomp";
import Buttoncomp from "../reuseable/buttoncomp";
const Adduser = () => {
  const [items, setItems] = useState([]);
  const [value, setvalue] = useState("");

  useEffect(() => {
    const itemsStr = localStorage.getItem("items");
    if (itemsStr) {
      setItems(JSON.parse(itemsStr));
    }
  }, []);

  const handleAddItem = (item) => {
    const newItems = [...items, item];
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
  };


  /////////////////////// GET INPUT FIELD VALUE /////////////
  function getInputValues(e) {
    setvalue(e);
  }
  return (
    <Container sx={{ height: "80vh" }}>
      <Grid
        container
        style={{ height: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          display="flex"
          flexDirection="column"
          width={{ sm: 400, xs: "100%" }}
          gap={2}
        >
          <Inputcomp
            changeValue={getInputValues}
            placeholder="Enter your name"
            variant="outlined"
          />
          <Buttoncomp
            value="Add a user"
            variant="contained"
            click={() => {
              handleAddItem(value);
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Adduser;
