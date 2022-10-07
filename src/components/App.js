import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

 class App extends React.Component {
  componentDidMount () {
    const { store } = this.props;

    store.subscribe(()=> { // step 2 (when change in state)
      this.forceUpdate();
    })
    store.dispatch(addMovies(data)); // step 1
  }
  render() {
  const { list } = this.props.store.getState();
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
         <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
         </div>

         <div className="list">
           {list.map((movie,index) => (
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
}

export default App;
