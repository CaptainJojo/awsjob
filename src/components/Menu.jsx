import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import { Auth, API } from "aws-amplify";

export default function Menu() {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const [groups, setGroups] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function fetchData(user) {
      const apiName = "AdminQueries";
      const path = "/listGroupsForUser";
      const myInit = {
        queryStringParameters: {
          username: user.username,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${(await Auth.currentSession())
            .getAccessToken()
            .getJwtToken()}`,
        },
      };
      const { NextToken, ...rest } = await API.get(apiName, path, myInit);
      setGroups(rest.Groups);
      const findAdmin = rest.Groups.find(
        (group) => group.GroupName === "admin"
      );
      setIsAdmin(findAdmin ? true : false);
    }

    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
      fetchData(authData);
    });
  }, [setAuthState]);

  return (
    <Grid item xs={12} container direction="column" justify="space-between">
      <List style={{ marginTop: "40px" }}>
        <ListItem>
          <AmplifySignOut />
        </ListItem>
        {isAdmin ? (
          <NavLink to="/listUser" exact>
            <ListItem button>List of user</ListItem>
          </NavLink>
        ) : (
          ""
        )}
        <NavLink to="/listTransactions" exact>
          <ListItem button>List of transactions</ListItem>
        </NavLink>
      </List>
    </Grid>
  );
}
