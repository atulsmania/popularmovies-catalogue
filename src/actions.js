import {
  ADD_FAV,
  REMOVE_FAV,
  MOVIES_LOADING,
  MOVIES_LOADING_SUCCESS,
  MOVIES_LOADING_FAILURE,
  MOVIE_DETAILS_LOADING,
  MOVIE_DETAILS_LOADING_SUCCESS,
  MOVIE_DETAILS_LOADING_FAILURE,
} from "./actionTypes";

// *favorite id list
const addToFav = (id) => ({
  type: ADD_FAV,
  payload: id,
});

const removeFromFav = (id) => ({
  type: REMOVE_FAV,
  payload: id,
});

// *movies database
const moviesLoading = () => ({
  type: MOVIES_LOADING,
});

const moviesLoadingSuccess = (movies) => ({
  type: MOVIES_LOADING_SUCCESS,
  data: movies,
});

const moviesLoadingFailure = (error) => ({
  type: MOVIES_LOADING_FAILURE,
  error,
});

// *movie details
const movieDetailsLoading = () => ({
  type: MOVIE_DETAILS_LOADING,
});

const movieDetailsLoadingSuccess = (movies) => ({
  type: MOVIE_DETAILS_LOADING_SUCCESS,
  data: movies,
});

const movieDetailsLoadingFailure = (error) => ({
  type: MOVIE_DETAILS_LOADING_FAILURE,
  error,
});

export const actions = {
  addToFav,
  removeFromFav,
  movieDetailsLoading,
  movieDetailsLoadingSuccess,
  movieDetailsLoadingFailure,
  moviesLoading,
  moviesLoadingSuccess,
  moviesLoadingFailure,
};