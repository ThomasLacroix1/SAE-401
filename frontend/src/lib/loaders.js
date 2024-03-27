export async function fetchMovies() {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    return data; 
}

// export async function fetchMoviesByCat(cat) {
//     let answer = await fetch('http://localhost:8080/api/movies');
//     let data = await answer.json();
//     let tab = [];
//     for (let el in data){
//         for (let cate in el.category){
//             if (cate.id == cat){
//                 tab += el;
//             }
//         }
//     };
//     return tab; 
// }

export async function fetchCategory() {
    let answer = await fetch('http://localhost:8080/api/categories');
    let data = await answer.json();
    return data; 
}