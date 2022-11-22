import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCourses } from "../redux/actions/courseActions";
import CourseComponent from "./CourseComponent";

const CoursesPage = () => {
  const dispatch = useDispatch();
  const fetchCourses = async () => {
    const response = await axios
      .get("https://api.bricketc.com/bricketc-backend-php/get_all_courses.php")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setCourses(response.data.body));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="ui grid container">
      <CourseComponent />
    </div>
  );
};

export default CoursesPage;
