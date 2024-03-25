export async function fetchMovies(){
    let answer = await fetch('http://localhost:8080/api/movies/1');
    let data = await answer.json();
    console.log(data);
    return data;
}