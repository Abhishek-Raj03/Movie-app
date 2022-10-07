import React from "react";
import { addFavourite, removeFavourite } from "../actions";

class MovieCard extends React.Component {

  handleFavouriteClick = ()=> {
    console.log("clicked")
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  }
  handleUnFavouriteClick = ()=> {
    const { movie } = this.props;
    this.props.dispatch(removeFavourite(movie));
  }

    render() {
        const { movie, isFavourite } = this.props;
        return (
         <div className="movie-card">
             <div className="left">
               <img src={movie.Poster} alt="movie-poster" />
             </div> 
             <div className="right">
               <div className="title">{movie.Title}</div>
               <div className="plot">{movie.Plot}</div>
               <div className="footer">
                  <div className="rating">{movie.imdbRating}</div>
                  {isFavourite
                  ? <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>Unfavourite</button>
                  : <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                  }
               </div>
             </div>
         </div>
        )
    }
}

export default MovieCard;