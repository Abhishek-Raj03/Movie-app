import React from "react";
import { connect } from 'react-redux';
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourits } from "../actions";
// import { storeContext } from '../index'

 class App extends React.Component {
  componentDidMount () {
    // const { store } = this.props;

    // store.subscribe(()=> { // step 2 (when change in state)
    //   this.forceUpdate();
    // })
    // store.dispatch(addMovies(data)); // step 1

    // console.log('STATE: ',store.getState())
    this.props.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie)=> {
    const { movies } = this.props;
    const { favourites } = movies
    const index = favourites.indexOf(movie);

      if(index !== -1) 
      return true;
        
      else return false;
  }
  onChangeTab = (val)=> {
    this.props.dispatch(setShowFavourits(val));
  }
  render() {
    const { movies, search } = this.props;
  const { list, favourites, showFavourites } = movies;
  console.log('RENDER: ',this.props);

  const displayMovies = showFavourites ? favourites : list

        return (
          <div className="App">
              <Navbar  search={search} />
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
                    dispatch={this.props.dispatch}
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

function callback(state) {
  return {
    movies: state.movies,
    search: state.movies,
  };
}
const connectedComponent = connect(callback)(App);
export default connectedComponent;

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <storeContext.Consumer>
//          { (store)=> <App store={store}/> }
//       </storeContext.Consumer>
//     )
//   }
  
// }
// export default AppWrapper;
