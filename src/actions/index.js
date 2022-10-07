// add movie


// action types
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'


// action creators
export function addMovies (movies) {
   return {
     type: ADD_MOVIES,
     movies: movies
   }
}

export function addFavourite (movie) {
  return {
    type: ADD_FAVOURITE,
    movie
  }
}

export function removeFavourite (movie) {
  return {
    type: REMOVE_FAVOURITE,
    movie
  }
}
