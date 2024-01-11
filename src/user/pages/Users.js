import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image: "image",
      name: "Alex Grant",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
