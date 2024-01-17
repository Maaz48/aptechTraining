import { Container, Grid, List, ListItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import Buttoncomp from "../reuseable/buttoncomp";
import Inputcomp from "../reuseable/inputcomp";

const Showusers = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsStr = localStorage.getItem("items");
    if (itemsStr) {
      setItems(JSON.parse(itemsStr));
    }
  }, []);

  const handleEditItem = (id, item) => {
    items.splice(id, 1, item);
    localStorage.setItem("items", JSON.stringify(items));
    setItems([...items]);
  };

  ///////////////////// DELETE //////////////////////
  const handleDeleteItem = (id) => {
    items.splice(id, 1);
    localStorage.setItem("items", JSON.stringify(items));
    setItems([...items]);
  };

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
          <List
            sx={{ height: "80vh", overflow: "hidden", overflowY: "scroll" }}
          >
            {items.length > 0 ? (
              items.map((item, ind) => (
                <ListItem key={ind}>
                  {console.log("asdasdasd")}
                  <Inputcomp
                    label={item}
                    value={item}
                    changeValue={(e) => handleEditItem(ind, e)}
                  />
                  <Buttoncomp
                    click={() => handleDeleteItem(ind)}
                    value="Delete"
                    variant="contained"
                  />
                </ListItem>
              ))
            ) : (
              <h1>No Record Found</h1>
            )}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Showusers;
