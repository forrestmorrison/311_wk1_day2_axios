// import axios here
const axios = require('axios').default;
require('dotenv').config();
// console.log(process.env);

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
// const api_key = process.env.SECRET_KEY;
const api_key = "d771b19ef336ed8381def3a60b574464";

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  return axios(url)
}

// discoverMovie();

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  return axios(url)
    .then(json => json.data)
}

// getMovieById(500);

const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  return axios(url)
    .then(response => response.json())
    .catch(error => error.response.status)
}

getMovieByIdFailure();

module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}