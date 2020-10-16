import React, { useState, useEffect, Fragment } from "react";
import { Auth, API } from "aws-amplify";
import AddGroup from "./AddGroup";
import Button from "@material-ui/core/Button";

export default function User({ user }) {
  const [groups, setGroups] = useState([]);
  const [deleteCompleted, setDeleteCompleted] = useState(false);
  const [addCompleted, setAddCompleted] = useState(false);
  const deleteToGroup = async ({ username, groupname }) => {
    const apiName = "AdminQueries";
    const path = "/removeUserFromGroup";
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
    await API.post(apiName, path, myInit);
    setDeleteCompleted(true);
  };

  useEffect(() => {
    async function fetchData() {
      const apiName = "AdminQueries";
      const path = "/listGroupsForUser";
      const myInit = {
        queryStringParameters: {
          username: user.Username,
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
      setDeleteCompleted(false);
      setAddCompleted(false);
    }
    fetchData();
  }, [user.Username, deleteCompleted, addCompleted]);

  return (
    <>
      <p>
        {user.Username} {user.UserStatus} in Groups:
        {groups.map((group, index) => (
          <Fragment key={index}>
            <Button
              color="secondary"
              variant="contained"
              style={{ margin: "2px" }}
              onClick={() =>
                deleteToGroup({
                  username: user.Username,
                  groupname: group.GroupName,
                })
              }
            >
              Delete to {group.GroupName}
            </Button>
          </Fragment>
        ))}
        <AddGroup
          groups={groups}
          user={user}
          setAddCompleted={() => setAddCompleted(true)}
        />
      </p>
    </>
  );
}
