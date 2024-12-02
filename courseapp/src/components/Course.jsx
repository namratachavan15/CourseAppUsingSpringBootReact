import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, Container, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import axios from "axios";
import { toast } from 'react-toastify';
import base_url from '../api/bootapi';

const Course = ({ course, update }) => {
  const navigate = useNavigate(); // Using useNavigate hook

  // Function to delete course
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Course deleted");
        update(id);  // Update the list of courses after deletion
      },
      (error) => {
        toast.error("Course not deleted || server problem");
      }
    );
  };

  // Navigate to Update Course page
  const handleUpdate = (id) => {
    navigate(`/update-course/${id}`);
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="danger" className="me-3" onClick={() => deleteCourse(course.id)}>
            Delete
          </Button>
          <Button color="warning" onClick={() => handleUpdate(course.id)}>
            Update
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
