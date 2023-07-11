import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies, nameSearch,rateSearch}) => {
  const Search=()=>{
    return movies.filter((film)=>
    {
      
     return(rateSearch===0?
      film.name.toLowerCase().includes(nameSearch.toLowerCase()):
      Number(film.rating) === rateSearch && film.name.toLowerCase().includes(nameSearch.toLowerCase())) 
    })

  }
  return (
    <div style={{
   
      display: "flex",
     flexDirection:"row",
     justifyContent:"space-around",
      margin:"30px",
      padding:"30px",
      position: "relative",
     
     } }>
        {Search().map((movie,index)=><MovieCard movie={movie} key={movie.id}/>)}
    </div>
  )
}

export default MovieList