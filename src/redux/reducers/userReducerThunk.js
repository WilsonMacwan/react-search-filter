const initialState = {
    users: [],
  };
  
  const userReducerThunk = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USER_SUCCESS":
        return { ...state, users: action.payload };
  
      default:
        return state;
    }
  };
  
  export default userReducerThunk;
  