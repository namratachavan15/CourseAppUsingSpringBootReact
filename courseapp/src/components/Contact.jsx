import React, { useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact || Learncode";
  }, []);

  return (
    <div>
      <Card className="text-center my-3" style={{ backgroundColor: '#f8f9fa' }}>
        <CardBody>
          <CardTitle tag="h1">Contact Us</CardTitle>
          <CardText>
            We would love to hear from you! Whether you have a question, feedback, or suggestion, feel free to reach out.
          </CardText>
        </CardBody>
      </Card>

      <Container className="my-3">
        <h4>Get in Touch</h4>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Your Name" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Your Email" />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input type="textarea" name="message" id="message" placeholder="Your Message" />
          </FormGroup>
          <Button color="primary">Send Message</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
