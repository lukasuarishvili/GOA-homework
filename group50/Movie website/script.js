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

    for (let i = 0; i < 13; i++) {
        const movie = data.results[i];
        const posterEl = createPopularMoviePoster(movie);
        movieRow.appendChild(posterEl);
    }

    ;
}


function createPopularMoviePoster(movie) {

    const container = document.createElement('div');
    container.className = "z-0relative w-40 h-60 bg-cover bg-center rounded-lg overflow-hidden shadow-lg";


    container.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`;

    return container;
}

function displaySearchedMovie(movie) {
    console.log(movie);

    const overlay = document.createElement("div");
    overlay.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

    const container = document.createElement("div");
    container.className = "bg-gray-700 rounded-xl shadow-2xl py-2.5 px-2 w-80 min-h-96 border border-gray-700 relative";

    const poster = document.createElement("img");
    poster.src = movie.Poster;
    poster.alt = `${movie.Title} poster`;
    poster.className = "w-full h-48 object-cover rounded-lg mb-4";

    const title = document.createElement("h2");
    title.textContent = movie.Title;
    title.className = "font-bold text-white text-xl mb-2";

    const year = document.createElement("h3");
    year.className = "font-bold text-gray-300 text-sm mb-4";
    year.textContent = movie.Year;

    const description = document.createElement("p");
    description.textContent = movie.Plot;
    description.className = "text-gray-200 font-normal text-sm ";




    container.appendChild(poster)
    container.appendChild(title);
    container.appendChild(year);
    container.appendChild(description);
    overlay.appendChild(container);


    document.body.appendChild(overlay);


    overlay.addEventListener('click', () => {
        overlay.remove();
    });
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

async function getMovesByGenries(params) {
    
}

searchButton.addEventListener("click", getFilmByName)


getPopularFilms()


