import { combineReducers } from 'redux';
import { SET_JOKES, FAVORITE_JOKES } from '../actions';
import { bake_cookie, read_cookie } from 'sfcookies';

function jokes(state = [], action) {
  console.log('reducer', action);
  switch(action.type) {
    case SET_JOKES:
      return action.items;
    default:
      return state;
  }
}

function favoriteJokes(state = [], action) {
  let favorites = [];
    state = read_cookie('favorites');
  switch(action.type) {
    case FAVORITE_JOKES:
      favorites = [...state, action.joke]
      bake_cookie('favorites', favorites);
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ jokes, favoriteJokes})

export default rootReducer;
