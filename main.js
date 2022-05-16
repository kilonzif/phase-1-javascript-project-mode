const api_key = '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'
const api_url = 'https://api.themoviedb.org/3/discover/movie?api_key=34a9687dacfd65f1330027e3c4a8bbed&language=en-US&sort_by=popularity.desc&page=1'
const data=''
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
    // data += `
    // <div class="movie-card" data-movie="Blade Runner">
    // <div class="movie-card__overlay"></div>
    // <div class="movie-card__content">
    //     <div class="movie-card__header">
    //     <h1 class="movie-card__title">${movie.title}</h1>
    //     <h4 class="movie-card__info">Released (${movie.release_date}), Vote Average ${movie.vote_average}</h4>
    //     </div>
    //     <p class="movie-card__desc">${movie.overview}</p>
    //     <button class="btn btn-outline movie-card__button" type="button"> ${movie.vote_count} Likes</button>
    // </div>
    // </div>
    // `
    var div = document.getElementById('divID');

    div.innerHTML += ` <div class="col-md-4">
    <div class="card">
    <img class="card-img-top" src="${movie.poster_path}" alt="${movie.title}" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">${movie.title}</h4>
      <h4 class="movie-card__info">Released (${movie.release_date}), Vote Average ${movie.vote_average}</h4>
      <p class="card-text">${movie.overview}</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>
    </div>`;
    // main.innerHTML = data;
}