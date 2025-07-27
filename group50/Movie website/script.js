// const TMDBKEY = "baa063fe2d13aeec256d78bf6c98dd1a";
// const OMDBKEY = "2a01434c";
const movieRow = document.getElementById("MovieRow");
const mainMovies=document.getElementById("Main movies");


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

async function getActionFilms(){
    async fetch("")
}

getPopularFilms()