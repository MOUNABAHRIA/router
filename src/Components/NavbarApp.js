import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";
import React from "react";
function NavScrollExample({nameSearch,setnameSearch,rateSearch,setrateSearch}) {
  const handleChange=(event)=>{setnameSearch(event.target.value)}
  const ratingChanged = (e) => {
   setrateSearch(e);}
   const refreshPage=()=>{
    window.location.reload()
   }
  return (
    <Navbar expand="Dark" className="bg-body-tertiary" >
      <Container fluid style={{desplay:" flex"}} >
        <Navbar.Brand  style={{color:"white", fontSize:"60px"}} href="#">Movie App</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll"/>  */}
        {/* <Navbar.Collapse id="navbarScroll" style={{margintop:" 10px" , justifyItems:"center"}} > */}
          <Form className="d-flex" >
            <Form.Control
              type="search"
              value={nameSearch}
              onChange={handleChange}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
    value={rateSearch}
  />
        {/* </Navbar.Collapse> */}
        <Button variant="outline-success" onClick={refreshPage}>RESET</Button>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;