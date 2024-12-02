import logo from './logo.svg';
import './App.css';
import { Button, Container, Col, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import About from './components/About';
import Contact from './components/Contact';
import UpdateCourse from './components/UpdateCourse';
import SearchCourse from './components/SearchCourse';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Correct this import

function App() {
  const btnHandle = () => {
    toast.error('done', {
      position: 'top-center',
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/view-courses" element={<AllCourses />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route exact path="/update-course/:id" element={<UpdateCourse />} />
                <Route path="/search" element={<SearchCourse />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
