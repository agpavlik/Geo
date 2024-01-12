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
    {
      id: "u2",
      image:
        "https://images.pexels.com/photos/1850732/pexels-photo-1850732.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
      name: "Max Teo",
      places: 3,
    },
    {
      id: "u3",
      image:
        "https://images.pexels.com/photos/1918052/pexels-photo-1918052.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
      name: "Rico Nord",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
