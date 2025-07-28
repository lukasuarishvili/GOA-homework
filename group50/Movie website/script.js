const TMDBKEY = "baa063fe2d13aeec256d78bf6c98dd1a";
const OMDBKEY = "2a01434c";
const movieRow = document.getElementById("MovieRow");
const mainMovies = document.getElementById("Main movies");
const movieTitle = document.querySelector("input");
const searchButton = document.getElementById("Search");
const body = document.querySelector("body");

async function getPopularFilms() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDBKEY}`);
    const data = await response.json()

    for (let i = 0; i < 8; i++) {
        const movie = data.results[i];
        const posterEl = createPopularMoviePoster(movie);
        movieRow.appendChild(posterEl);
    }

    ;
}


function createPopularMoviePoster(movie) {

    const container = document.createElement('div');
    container.className = "relative w-40 h-60 bg-cover bg-center rounded-lg overflow-hidden shadow-lg";


    container.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`;

    return container;
}

function displaySearchedMovie(movie) {
    console.log(movie)
}




async function getFilmByName() {
    let title = movieTitle.value.trim()

    if (!title) {
        alert("movie title needs to be filled");

    }
    const response = await fetch(`https://www.omdbapi.com/?apikey=${OMDBKEY}&t=${title}`);
    const data = await response.json();

    if (data.Response === "True") {
        displaySearchedMovie(data);
    } else {
        alert("Movie not found.");
    }
    movieTitle.value = ""

}
searchButton.addEventListener("click", getFilmByName)


getPopularFilms()


