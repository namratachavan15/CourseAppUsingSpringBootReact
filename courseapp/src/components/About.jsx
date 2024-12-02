import React, { useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Container } from 'reactstrap';

const About = () => {
  useEffect(() => {
    document.title = "About || Learncode";
  }, []);

  return (
    <div>
      <Card className="text-center my-3" style={{ backgroundColor: '#f8f9fa' }}>
        <CardBody>
          <CardTitle tag="h1">About Learncode</CardTitle>
          <CardText>
            Learncode is a platform developed by Durgesh for learning and enhancing coding skills. 
            This platform offers courses on various topics, and it is built with the combination of
            Spring Boot (backend) and React.js (frontend).
          </CardText>
        </CardBody>
      </Card>

      <Container className="my-3">
        <h4>Our Vision</h4>
        <p>
          Our vision is to make coding accessible and enjoyable for everyone by providing 
          quality resources and an interactive learning experience.
        </p>
        
        <h4>Our Team</h4>
        <p>
          Learncode was created by Durgesh, a passionate software developer who believes in 
          learning by doing. The platform is constantly being updated with new courses and features.
        </p>
      </Container>
    </div>
  );
};

export default About;
