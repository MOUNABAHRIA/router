import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import { useNagate, Link } from "react-router-dom";

const MovieCard = ({ movie, setrateSearch, rateSearch }) => {
  // const ratingChanged = (e) => {
  //   setrateSearch(e);}
  return (
    <div>
      
      <Card
        className="cardex"
        style={{
          margin: "30px",
          height: "46rem",
          width: "20em",
          border: "solid white 3px",
          borderradius: "3px",
          boxshadow: "10px 5px 5px red",
        }}
      >
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Link to={`/description/${movie.name}`}>{movie.name}</Link>
          <Card.Title style={{ color: "red" }}>{movie.trailer}</Card.Title>

          <ReactStars
            count={7}
            // onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            value={movie.rating}
          />
          <Card.Text>
            {movie.id}
            {movie.description}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
