import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourits } from "../actions";

 class App extends React.Component {
  componentDidMount () {
    const { store } = this.props;

    store.subscribe(()=> { // step 2 (when change in state)
      this.forceUpdate();
    })
    store.dispatch(addMovies(data)); // step 1

    console.log('STATE: ',store.getState())
  }

  isMovieFavourite = (movie)=> {
    const { movies } = this.props.store.getState();
    const { favourites } = movies
    const index = favourites.indexOf(movie);

      if(index !== -1) 
      return true;
        
      else return false;
  }
  onChangeTab = (val)=> {
    this.props.store.dispatch(setShowFavourits(val));
  }
  render() {
    const { movies } = this.props.store.getState();
  const { list, favourites, showFavourites } = movies;
  console.log('RENDER: ',this.props.store.getState());

  const displayMovies = showFavourites ? favourites : list

  return (
    <div className="App">
      <Navbar/>
      <div className="main">
         <div className="tabs">
          <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={()=>{this.onChangeTab(false)}}>Movies</div>
          <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={()=>{this.onChangeTab(true)}}>Favourites</div>
         </div>

         <div className="list">
           {displayMovies.map((movie,index) => (
           <MovieCard 
              movie={movie} 
              key={`movie-${index}`} 
              dispatch={this.props.store.dispatch}
              isFavourite={this.isMovieFavourite(movie)}
            />
           ))}

           {/* {data.map((movie)=> {
            <MovieCard movie={movie}/>
           })} */}
         </div>
       {displayMovies.length===0 ? <div className="no-movies">No Movies to Display!</div> : null}
      </div>
    </div>
  );
 }
}

export default App;
