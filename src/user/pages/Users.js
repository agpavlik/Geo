import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://images.pexels.com/photos/1452128/pexels-photo-1452128.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
      name: "Alex Grant",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
