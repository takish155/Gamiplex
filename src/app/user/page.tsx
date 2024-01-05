"use client";

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FavoriteGameList from "./FavoriteGameList";
import { favoriteGameHeading, favoriteGameSection } from "./_userStyles";

const page = async () => {
  return (
    <Grid item xs={12} md={8.5}>
      <Box sx={favoriteGameSection}>
        <Typography variant="h5" sx={favoriteGameHeading} component="h2">
          Favorite Games
        </Typography>
        <FavoriteGameList />
      </Box>
    </Grid>
  );
};

export default page;