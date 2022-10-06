import React from "react";
// import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function App(props) {
  const movies = props.store.getState();
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
         <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
         </div>

         <div className="list">
           {movies.map((movie,index) => (
            <MovieCard movie={movie} key={`movie-${index}`}/>
           ))}

           {/* {data.map((movie)=> {
            <MovieCard movie={movie}/>
           })} */}
         </div>
      </div>
    </div>
  );
}

export default App;
