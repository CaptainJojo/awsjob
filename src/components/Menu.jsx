import React from "react";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { AmplifySignOut } from "@aws-amplify/ui-react";

export default function Menu() {
  return (
    <Grid item xs={12} container direction="column" justify="space-between">
      <List style={{ marginTop: "40px" }}>
        <ListItem>
          <AmplifySignOut />
        </ListItem>
        <NavLink to="/listUser" exact>
          <ListItem button>List of user</ListItem>
        </NavLink>
        <NavLink to="/listTransactions" exact>
          <ListItem button>List of transactions</ListItem>
        </NavLink>
      </List>
    </Grid>
  );
}
