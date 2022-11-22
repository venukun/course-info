import { ActionTypes } from "../constants/action-types";
const intialState = {
  courses: [],
};

export const coursesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COURSES:
      return { ...state, courses: payload };
    default:
      return state;
  }
};

export const selectedCoursesReduer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_COURSE:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_COURSE:
      return {};
    default:
      return state;
  }
};
