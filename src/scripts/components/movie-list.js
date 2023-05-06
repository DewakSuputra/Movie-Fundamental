import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const api_key = "?api_key=00c23ab69173ef7d4ba593663f51d9a2";

const getMovies = async () => {
  axios
    .get(`${baseUrl}/discover/tv${api_key}`)
    .then((response) => {
      return response.data;
    })
    .then((responseJson) => {
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        // console.log(responseJson.results);
        renderAllMovies(responseJson.results);
      }
    })
    .catch((error) => {
      showResponseMessage(error);
    });
};

const renderAllMovies = (movies) => {
  const listMovieElement = document.querySelector("#movie");
  listMovieElement.innerHTML = "";

  movies.forEach((movie) => {
    listMovieElement.innerHTML += `
            <div class="card">
                <figure class="movie-img">
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.name}">
                </figure>
                <h2>${movie.name}</h2>
                <p class="card-description">${movie.overview}</p>
                <a href="#">Selengkapnya</a>
            </div>
        `;
  });
};

const showResponseMessage = (message = "Ups something error") => {
  alert(message);
};

document.addEventListener("DOMContentLoaded", () => {
  getMovies();
});
