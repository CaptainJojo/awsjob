import React, { useEffect, useState } from "react";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListUser from "./pages/ListUser";
import Layout from "./components/Layout";
import ListTransactions from "./pages/ListOfTransactions";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import { Auth, API } from "aws-amplify";

function App() {
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
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            {isAdmin ? (
              <>
                <Route path="/listUser" exact>
                  <ListUser />
                </Route>
                <Route path="/listTransactions" exact>
                  <ListTransactions />
                </Route>
              </>
            ) : (
              "You need admin privileges"
            )}
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default withAuthenticator(App, true);
