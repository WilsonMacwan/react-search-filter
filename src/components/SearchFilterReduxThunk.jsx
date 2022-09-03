import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions/userActionsThunk";

const SearchFilterReduxThunk = () => {
  const users = useSelector((state) => state.usersThunk.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);
  const filteredUsers = (users) => {
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
      <h2>Search Filter Redux Thunk</h2>
      <div>
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div>
        {filteredUsers(users).map((user) => (
          <h3 key={user.id}>{user.name}</h3>
        ))}
      </div>
    </div>
  );
};

export default SearchFilterReduxThunk;
