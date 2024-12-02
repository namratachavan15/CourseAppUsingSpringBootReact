import React from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'

const Menus = () => {
  return (
  
   <>
   <ListGroup>

      <Link to="/" className="list-group-item list-group-item-action" tag="a" action>Home</Link>
       

      <Link to="/add-course" className="list-group-item list-group-item-action" tag="a" action>Add Course</Link>
      
    
       <Link to="/view-courses" className="list-group-item list-group-item-action" tag="a" action> View Courses</Link>
       
       <Link to="/about" className="list-group-item list-group-item-action" tag="a" action>About</Link>
      
    
       <Link to="/contact" className="list-group-item list-group-item-action" tag="a" action>Contact</Link>
       <Link to="/search" className="list-group-item list-group-item-action" tag="a" action>Search</Link>
       </ListGroup>
       </>
  )
}

export default Menus