import { combineReducers } from "redux";

import { ADD_MOVIES,
         ADD_FAVOURITE, 
         REMOVE_FAVOURITE, 
         SET_SHOW_FAVOURITES } from "../actions";

const initialMovieState={
   list: [],
   favourites: [],
   showFavourites: false
}

export function movies(state=initialMovieState,action) {
   
   switch(action.type) {
      case ADD_MOVIES:
         return {
            ...state,
            list: action.movies
         }
      case ADD_FAVOURITE:
         return {
            ...state,
            favourites: [action.movie, ...state.favourites]
         }
      case REMOVE_FAVOURITE:
         // const index=state.favourites.indexOf(action.movie);
         // state.favourites.splice(index,1);
         const filteredArray=state.favourites.filter(
            movie => movie.Title !== action.movie.Title
         )
         return {
            ...state,
            favourites: filteredArray
         }

      case SET_SHOW_FAVOURITES:
         return {
            ...state,
            showFavourites: action.val
         }
      default:
         return state;
   }
}

const initialSearchState = {
   result: {}
}

export function search (state=initialSearchState,action) {
   return state;
}

// const initailaRootState = {
//    movies: initialMovieState,
//    search: initialSearchState
// }

// export default function rootReducer (state=initailaRootState,action) {
//    return {
//       movies: movies(state.movies,action),
//       search: search(state.search,action)
//    }
// }

export default combineReducers ({
   movies: movies,
   search: search
})
