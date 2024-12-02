import React, { useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Button } from 'reactstrap';

const Home = () => {
  useEffect(() => {
    document.title="Home|| Learncode"
  },[]);
  return (
    <div>
    <Card className="text-center" style={{ backgroundColor: '#f8f9fa' }}>
      <CardBody>
        <CardTitle tag="h1">Welcome to Course Application</CardTitle>
        <CardText>
          This platform is designed to help you manage and track your courses effortlessly. 
          Whether you're an instructor or a student, our course management system makes it easy to 
          add, view, and manage courses.
        </CardText>
        <CardText>
          With features like adding new courses, viewing existing courses, and tracking your progress, 
          this application is built with simplicity in mind to ensure a smooth learning experience.
        </CardText>
      </CardBody>
      <Container className='m-3'>
        <Button color="primary" outline>Start Using</Button>
      </Container>
    </Card>
  </div>  );
};

export default Home;
