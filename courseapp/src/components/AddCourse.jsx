import React, { Fragment,useEffect,useState } from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'
import axios, { Axios } from 'axios';
import base_url from '../api/bootapi';
const AddCourse = () => {
  useEffect(() => {
    document.title="Add Course"
  },[]);

  const [course, setCourse] = useState({});


  const handleForm=(e)=>{
    e.preventDefault();
    postDatatoServer(course);
    
    console.log(course);
  }

//creating function to post data on server

const postDatatoServer=(data)=>{
  axios.post(`${base_url}/courses`,data).then(
    (response)=>{
      console.log(response);
      console.log("success");
    },(error)=>{
      console.log(error);
      console.log("error");
    }
  )
};

  return (

    <Fragment>

        <h1 className='text-center my-3'>Fill Course Detail</h1>

        <Form onSubmit={handleForm}>
             <FormGroup>
                <label htmlFor="userId" className='form-label'>Course Id</label>
                <Input type="text" placeholder='Enter here' name="userId" id="userId" onChange={(e)=>{
                   setCourse({...course,id:e.target.value});
                }}/>
             </FormGroup>
                <FormGroup>
                    <label htmlFor="title" className='form-label'>Course Title</label>
                    <Input type="text" placeholder='Enter title here' id="title" onChange={(e)=>{
                      setCourse({...course,title:e.target.value});}}/>
                </FormGroup>  
                <FormGroup>
                    <label htmlFor="description" className='form-label'>Course Description</label>
                    <Input type="textarea" placeholder='Enter description here' id="description" style={{height:150}} onChange={(e)=>{
                   setCourse({...course,description:e.target.value});}}/>                
              </FormGroup>  
    <Container  className='text-center'>
        <Button type="submit" color="success" className='me-3'>Add Course</Button>
        
        <Button type="reset" color="warning" className="ms-3" onClick={(e)=>{
          setCourse({id:"",title:"",description:""});
        }}>Clear</Button>
    </Container>
        </Form>   

    </Fragment>

  )
}

export default AddCourse