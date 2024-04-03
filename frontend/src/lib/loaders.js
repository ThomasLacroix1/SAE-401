export async function fetchMovies() {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    return data; 
}

export async function fetchMovie(mov) {
    let answer = await fetch('http://localhost:8080/api/movies/'+mov);
    let data = await answer.json();
    return data; 
}

export async function fetchMoviesByCat(cat) {
    let answer = await fetch('http://localhost:8080/api/categories/'+cat);
    let data = await answer.json();
    return data.movies; 
}

export async function fetchCategory() {
    let answer = await fetch('http://localhost:8080/api/categories');
    let data = await answer.json();
    return data; 
}

export async function fetchMoviesInFront() {
    let answer = await fetch('http://localhost:8080/api/movies_in_front');
    let data = await answer.json();
    return data; 
}

export async function fetchActualUser() {
    let answer = await fetch('http://localhost:8080/actual_user');
    console.log(answer)
    let data = await answer.json();
    return data; 
}