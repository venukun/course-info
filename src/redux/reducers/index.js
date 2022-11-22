import { combineReducers } from "redux";
import { coursesReducer, selectedCoursesReduer } from "./coursesReducer";
const reducers = combineReducers({
  allCourses: coursesReducer,
  course: selectedCoursesReduer,
});
export default reducers;
