export async function fetchMovies() {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    return data; 
}

export async function fetchMoviesByCat(cat) {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    let tab = []
    tab = data.filter(el =>
        el.category.some(cate => cate.id.toString() === cat));
    return tab; 
}

// data.filter(movie => movie.name.toLowerCase().includes(searchTerm));

export async function fetchCategory() {
    let answer = await fetch('http://localhost:8080/api/categories');
    let data = await answer.json();
    return data; 
}