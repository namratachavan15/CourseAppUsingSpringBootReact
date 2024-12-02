import React, { useState, useEffect } from 'react';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';


const AllCourses = () => {
  useEffect(() => {
    document.title = "All Course";
  }, []);


  // Function to call server
  const getAllCoursesFromServer = () => {
    console.log("inside function");
    axios.get(`${base_url}/courses`)
      .then((response) => {
        console.log(response);
        toast.success("Courses have been loaded", {
          position: "bottom-center",
        });
        setCourses(response.data);  // Assuming response.data contains the course list
      })
      .catch((error) => {  // Corrected from `error` callback position
        console.log(error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  // Calling loading course function on component mount
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([]);

  const updateCourses=(id)=>{

      setCourses(courses.filter((c)=>c.id != id));
    
  };

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of courses are as follows:</p>
      {
        courses.length > 0
          ? courses.map((item)=> <Course key={item.id} course={item} update={updateCourses}/>)
          : "No courses available"
      }
    </div>
  );
};

export default AllCourses;
