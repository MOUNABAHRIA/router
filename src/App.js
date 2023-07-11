
import './App.css';
import { MovieData } from './Components/MovieData';
import MovieList from './Components/MovieList';
import NavbarApp from './Components/NavbarApp';
import React,{ useState } from 'react';
import Addmovies from './Components/Addmovies';
import{Routes, Route} from "react-router-dom"
import Description from'./Components/Description'





function App() {
  const[movie,setMovie]=useState(MovieData)
  const[name,setName]=useState("")
  const[rate,setRate]=useState(0)
 

  return (
    <div className='App'>
    <Routes>
      <Route
      exact
      path="/"
      element={[
    <NavbarApp nameSearch={name} setnameSearch={setName} rateSearch={rate} setrateSearch={setRate}  />,
    <MovieList movies={movie} nameSearch={name} rateSearch={rate}/>,
    <Addmovies movies={movie} setMovie={setMovie} />]}/>

     <Route
      path="/description/:name" 
      element={<Description movie={movie}/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
