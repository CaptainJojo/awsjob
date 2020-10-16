import React, { useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import User from "../components/User";
import Paper from "@material-ui/core/Paper";
export default function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apiName = "AdminQueries";
      const path = "/listUsers";
      const myInit = {
        queryStringParameters: {
          limit: 10,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${(await Auth.currentSession())
            .getAccessToken()
            .getJwtToken()}`,
        },
      };
      const { NextToken, ...rest } = await API.get(apiName, path, myInit);

      setUsers(rest.Users);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Paper>
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </Paper>
    </div>
  );
}
