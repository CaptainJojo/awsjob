import React from "react";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListUser from "./pages/ListUser";
import Layout from "./components/Layout";
import ListTransactions from "./pages/ListOfTransactions";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            <Route path="/listUser" exact>
              <ListUser />
            </Route>
            <Route path="/listTransactions" exact>
              <ListTransactions />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default withAuthenticator(App, true);
