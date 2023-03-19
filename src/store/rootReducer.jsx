import { combineReducers } from "redux";
import movieBookingReducer from "../components/duck/reducer";

const rootReducer = combineReducers({
  movieBookingReducer,
});

export { rootReducer };
