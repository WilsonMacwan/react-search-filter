import React, { useEffect, useState } from "react";
import userAPI from "../api/userAPI";

const initialState = [];
const FetchUser = () => {
  const [users, setUsers] = useState(initialState);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);

  const fetchUser = async () => {
    await userAPI
      .get("/users")
      .then((response) => response.data)
      .then((result) => setUsers(result))
      .catch((error) => console.log("Error", error));
    // await fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((result) => console.log("Data", result))
    //   .catch((error) => console.log("Error", error));
  };

  console.log("Users", users);

  useEffect(() => {
    fetchUser();
  }, []);

  const filteredUser = (users) => {
    return users.filter((item) => {
      return searchParam.some((newUser) => {
        return (
          item[newUser].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  return (
    <div>
      <h3>Users</h3>
      <div>
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      {filteredUser(users).map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
};

export default FetchUser;
