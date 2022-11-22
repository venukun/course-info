import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../redux/actions/courseActions";
import {
  selectedCourse,
  removeSelectedCourse,
} from "../redux/actions/courseActions";
const CourseDetails = () => {
  const { courseId } = useParams();
  let course = useSelector((state) => state.course);
  const allCourses = useSelector((state) => state.allCourses.courses);
  console.log(allCourses)
  console.log(course);
  const { imageUrl, name, amountUsd, subjectName, info } = course;
  const dispatch = useDispatch();
  const fetchCourseDetail = async (id) => {
    if (!allCourses.length) {
      const response = await axios
      .get("https://api.bricketc.com/bricketc-backend-php/get_all_courses.php")
      .catch((err) => {
        console.log("Err: ", err);
      });
      dispatch(setCourses(response.data.body));
    } 
  };

  useEffect(() => {
    if (courseId && courseId !== "") fetchCourseDetail(courseId);
    return () => {
      dispatch(removeSelectedCourse());
    };
  }, [courseId]);

  useEffect(() => {
    console.log('allCourses', allCourses);
    console.log('allCourses', );
    const myCourse = allCourses.filter(course => course.idCourse === courseId)[0];
    if (myCourse) {
      dispatch(selectedCourse(myCourse));
    }
  }, [allCourses]);

  return (
    <div className="ui grid container">
      {Object.keys(course).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={imageUrl} />
              </div>
              <div className="column rp">
                <h1>{name}</h1>
                <h2>
                  <a className="ui teal tag label">${amountUsd}</a>
                </h2>
                <h3 className="ui brown block header">{subjectName}</h3>
                <p>{info}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
