export const SET_JOKES = 'SET_JOKES';
export const FAVORITE_JOKES = 'FAVORITE_JOKES';

export function setJokes(items){
  return {
    type: SET_JOKES,
    items
  }
}

export function favoriteJoke(joke){
  return {
    type: FAVORITE_JOKES,
    joke
  }
}
