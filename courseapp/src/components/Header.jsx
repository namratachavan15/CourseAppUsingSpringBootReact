import React from 'react'
import { Card, CardBody, Container } from 'reactstrap';

const Header = ({name,title}) => {
  return (
    <div>
      <Container>
      <Card className='my-2 bg-warning'>
        <CardBody>
        <h1 className='text-center my-2'>Welcome to Courses Application</h1>
        </CardBody>
      </Card>
      </Container>
    </div>
  );
}

export default Header