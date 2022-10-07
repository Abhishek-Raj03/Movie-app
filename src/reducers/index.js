import { ADD_MOVIES } from "../actions";

const initialMovieState={
   list: [],
   favourites: []
}

export default function movies(state=initialMovieState,action) {
   if(action.type===ADD_MOVIES){
    return {
      ...initialMovieState,
      list: action.movies
    };
   }
   return state;
}