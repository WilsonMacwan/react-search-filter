import userAPI from "../../api/userAPI";

export const fetchUsers = () => {
  return async (dispatch) => {
    await userAPI
      .get("/users")
      .then((res) => res)
      .then((result) => {
        dispatch({
          type: "FETCH_USER_SUCCESS",
          payload: result.data,
        });
      })
      .catch((e) => console.log("Error", e));
  };
};
