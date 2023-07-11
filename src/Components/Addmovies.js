import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Addmovies = ({movies,setMovie}) => {
    const [show, setShow]=useState(false)
    const [newTitle, setnewTitle]=useState()
    const [newRate, setnewRate]=useState()
    const [newPoster, setnewPoste]=useState()
    const [newDescription, setnewDescription]=useState()
    const handleShow=()=>{setShow(true)}
    const handleClose=()=>{setShow(false)}
    const NewMovie=()=>{
        let newMovie={
            id: Math.random(),
            name: newTitle,
            image: newPoster,
            rating: newRate,
            description: newDescription, 
        }
        setMovie([...movies,newMovie])
        handleClose()
    }

  return (
    <div>
         <Button  style={{background:"green"}} variant="primary" active onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
         Enter Movie Title
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange= {(e)=> setnewTitle(e.target.value)}
          />

           </InputGroup>
           <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
         Enter Movie Rate
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange= {(e)=> setnewRate(e.target.value)}
          />
           </InputGroup>
           <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
         Enter Movie Poster
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange= {(e)=> setnewPoste(e.target.value)}
          />
           </InputGroup>
           <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
         Enter Movie Description
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange= {(e)=> setnewDescription(e.target.value)}
          />
           </InputGroup>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={NewMovie}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
   
    </div>
  )
}

export default Addmovies