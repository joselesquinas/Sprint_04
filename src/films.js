// Exercise 1: Get the array of all directors.
// director
function getAllDirectors(array) {
  let result = array.map(item => `${item.director}`);
  console.log("EXERCICE 1 ->", result);
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
   const result = array.filter( films => films.director === director);
  return result;
}


// TODO Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
   let movieDirector = x => x['director'] === director;
   let directors = array.filter(movieDirector).map(x => x.score);
   let average = (directors.reduce((acc,val) => {
     return acc + val;
   } ,0) / (directors.length));
   return average;
}


// TODO Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}




// Exercise 5: Order by year, ascending
function orderByYear() {


   
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
