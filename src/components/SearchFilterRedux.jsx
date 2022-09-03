import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAPI from "../api/userAPI";

const SearchFilterRedux = () => {
  const data = useSelector((state) => state.users.users);
  console.log("Data", data);
  const dispatch = useDispatch();

  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);

  const fetchUsers = async () => {
    await userAPI
      .get("/users")
      .then((res) => res.data)
      .then((result) => {
        dispatch({
          type: "FETCH_USERS_SUCCESS",
          payload: result,
        });
      })
      .catch((e) => console.log(e));
  };

  const filteredUser = (users) => {
      console.log("users", users)
    return users.filter((item) => {
      return searchParam.some((newUser) => {
        return (
          item[newUser].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h3>Search Filter Redux</h3>
      <div>
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      {filteredUser(data).map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
};

export default SearchFilterRedux;
