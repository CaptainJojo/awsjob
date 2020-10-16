import React, { useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import Button from "@material-ui/core/Button";

export default function AddGroup({ user, groups, setAddCompleted }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  const addToGroup = async ({ username, groupname }) => {
    const apiName = "AdminQueries";
    const path = "/addUserToGroup";
    const myInit = {
      body: {
        username,
        groupname,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };

    setAddCompleted();
    return await API.post(apiName, path, myInit);
  };

  useEffect(() => {
    const findAdmin = groups.find((group) => group.GroupName === "admin");
    const findCustomer = groups.find((group) => group.GroupName === "customer");
    setIsAdmin(findAdmin ? true : false);
    setIsCustomer(findCustomer ? true : false);
  }, [groups]);

  return (
    <>
      {!isCustomer ? (
        <Button
          onClick={() =>
            addToGroup({ username: user.Username, groupname: "customer" })
          }
        >
          Add to Customer
        </Button>
      ) : (
        ""
      )}
      {!isAdmin ? (
        <Button
          onClick={() =>
            addToGroup({ username: user.Username, groupname: "admin" })
          }
        >
          Add to Admin
        </Button>
      ) : (
        ""
      )}
    </>
  );
}
