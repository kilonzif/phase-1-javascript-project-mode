const api_key = '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'
const api_url = 'https://api.themoviedb.org/3/discover/movie?api_key=34a9687dacfd65f1330027e3c4a8bbed&language=en-US&sort_by=popularity.desc&page=1'

document.addEventListener('DOMContentLoaded', () => {
    getMovies()
})

function getMovies(){
    fetch(api_url).then(res => res.json())
    .then(movies => {
        const results = movies.results
        results.forEach(movie => {
            singleMovie(movie)
        });
    })
}

function singleMovie(movie){
    console.log(movie);
}