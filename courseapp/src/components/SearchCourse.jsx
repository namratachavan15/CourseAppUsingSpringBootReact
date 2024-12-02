import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button, Card, CardBody, CardTitle, CardText, Spinner, Container, Row, Col, Alert } from 'reactstrap';
import { toast } from 'react-toastify';
import base_url from '../api/bootapi'; // Ensure this is correct

const SearchCourse = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'Search Courses';
  }, []);

  // Function to call server to search courses by keyword
  const searchCourses = async () => {
    if (!searchKeyword) {
      toast.error('Please enter a search keyword', {
        position: 'top-center',
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.get(`${base_url}/courses/search?keyword=${searchKeyword}`);
      if (response.data.length === 0) {
        toast.info('No courses found matching your search', {
          position: 'top-center',
        });
      }
      setCourses(response.data); // Set the filtered courses
    } catch (error) {
      console.error('Error searching courses', error);
      toast.error('Something went wrong while searching', {
        position: 'top-center',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  // Trigger search when the user clicks the "Search" button
  const handleSearchClick = () => {
    searchCourses();
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={8} className="mx-auto">
          <div className="text-center">
            <h1 className="mb-4">Search Courses</h1>
            <p className="mb-4">Find courses by title, description, or keyword</p>

            {/* Search input with Bootstrap styling */}
            <div className="mb-4">
              <Input
                type="text"
                value={searchKeyword}
                onChange={handleSearchChange}
                placeholder="Search by course title or description..."
                className="form-control-lg shadow-sm rounded-pill"
                style={{ borderColor: '#007bff' }}
              />
              <Button
                color="primary"
                onClick={handleSearchClick}
                className="mt-3 rounded-pill"
                disabled={isLoading}
                block
              >
                {isLoading ? <Spinner size="sm" /> : 'Search'}
              </Button>
            </div>
          </div>

          {/* Display search results */}
          <div>
            {isLoading ? (
              <div className="text-center">
                <Spinner color="primary" />
                <p>Loading...</p>
              </div>
            ) : courses.length > 0 ? (
              <Row>
                {courses.map((course) => (
                  <Col md={6} key={course.id} className="mb-4">
                    <Card className="shadow-lg">
                      <CardBody>
                        <CardTitle tag="h5" className="text-primary">{course.title}</CardTitle>
                        <CardText>{course.description}</CardText>
                        
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <Alert color="warning" className="text-center">
                No courses found. Try a different search keyword.
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchCourse;
