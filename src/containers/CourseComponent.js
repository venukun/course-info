import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CourseComponent = () => {
  const courses = useSelector((state) => state.allCourses.courses);
  const renderList = courses.map((course) => {
    const { idCourse, name, imageUrl, amountUsd, subjectName } = course;
    return (
      <div className="four wide column" key={idCourse}>
        <Link to={`/course/${idCourse}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={imageUrl} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta price">$ {amountUsd}</div>
                <div className="meta">{subjectName}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default CourseComponent;
