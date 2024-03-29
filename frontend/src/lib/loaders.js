export async function fetchMovies() {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    return data; 
}

export async function fetchMoviesByCat(cat) {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    let tab = [];
    for (let el of data){
        for (let cate of el.category){
            console.log("fetch", cate.id, cat)
            if (cate.id == cat){
                tab.push(el);
            }
        }
    };
    return tab; 
}

export async function fetchCategory() {
    let answer = await fetch('http://localhost:8080/api/categories');
    let data = await answer.json();
    return data; 
}