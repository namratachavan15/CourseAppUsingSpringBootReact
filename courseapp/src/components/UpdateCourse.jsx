import React, { useState, useEffect } from 'react';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const UpdateCourse = () => {
  const { id } = useParams();  // Get the course ID from the URL
  const navigate = useNavigate();  // Use useNavigate instead of useHistory
  const [course, setCourse] = useState({
    id: '',
    title: '',
    description: ''
  });

  useEffect(() => {
    // Fetch the existing course details
    axios.get(`${base_url}/course/${id}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
      });
  }, [id]);

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the updated course data to the server
    axios.put(`${base_url}/courses`, course)
      .then((response) => {
        toast.success("Course updated successfully");
        navigate('/view-courses');  // Redirect after successful update
      })
      .catch((error) => {
        toast.error("Error updating course");
      });
  };

  return (
    <div>
      <h1 className="text-center my-3">Update Course Details</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="title" className="form-label">Course Title</label>
          <Input
            type="text"
            name="title"
            id="title"
            value={course.title}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description" className="form-label">Course Description</label>
          <Input
            type="textarea"
            name="description"
            id="description"
            value={course.description}
            onChange={handleChange}
            style={{ height: 150 }}
          />
        </FormGroup>

        <Container className="text-center">
          <Button type="submit" color="success" className="me-3">
            Update Course
          </Button>
          <Button type="reset" color="warning" className="ms-3" onClick={() => setCourse({ title: '', description: '' })}>
            Clear
          </Button>
        </Container>
      </Form>
    </div>
  );
};

export default UpdateCourse;
