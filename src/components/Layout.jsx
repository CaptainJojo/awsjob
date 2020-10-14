import React from "react";
import Menu from "./Menu";
import Grid from "@material-ui/core/Grid";

export default function Layout({ children }) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item>
          <Menu></Menu>
        </Grid>
        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}
