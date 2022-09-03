import { combineReducers } from "redux";
import userReducer from "./userReducer";
import userReducerThunk from "./userReducerThunk";

const rootReducer = combineReducers({
  users: userReducer,
  usersThunk : userReducerThunk
});

export default rootReducer;
