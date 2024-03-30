export async function fetchMovies() {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    return data; 
}

export async function fetchMoviesByCat(cat) {
    console.log(cat);
    let answer = await fetch('http://localhost:8080/api/categories/'+cat);
    let data = await answer.json();
    return data.movies; 
}

export async function fetchCategory() {
    let answer = await fetch('http://localhost:8080/api/categories');
    let data = await answer.json();
    return data; 
}