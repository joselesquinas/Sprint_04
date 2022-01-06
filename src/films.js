// Exercise 1: Get the array of all directors.
// director
function getAllDirectors(array) {
   let result = array.map(item => `${item.director}`);
   // console.log("EXERCICE 1 ->", result);
   return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
   const result = array.filter(films => films.director === director);
   return result;
}


// TODO Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
   let movieDirector = x => x['director'] === director;
   let directors = array.filter(movieDirector).map(x => x.score);
   let average = (directors.reduce((acc, val) => {
      return acc + val;
   }, 0) / (directors.length));
   return average;
}


// TODO Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
   let result = [];
   result = (array.map(item => `${item.title}`).sort()).slice(0, 20);
   return result;
}


// TODO Exercise 5: Order by year, ascending
function orderByYear(array) {
   let myArray = [];
   myArray = array.map((films) => {
      return {
         title: films.title,
         year: films.year
      }
   });

   myArray.sort((a, b) => {
      if (a.year < b.year) {
         return -1;
      }
      if (a.year > b.year) {
         return 1;
      }
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
         return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
         return 1;
      }
      return 0;
   });

   return myArray;

}


// TODO Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {
   let myCategory = [];
   myCategory = movies.map((films) => {
      return {
         genre: films.genre,
         score: films.score
      };
   });

   return myCategory;

}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
   // duration: '2h 55min'

}

// TODO Exercise 8: Get the best film of a year
function bestFilmOfYear(array, theYear) {
   let filmsYear = array.filter(films => films.year === theYear);
   let acc = 0;
   for (let i = 0; i < filmsYear.length; i++) {
      if (acc > filmsYear[i].score) {
         acc = acc;
      } else {
         acc = filmsYear[i].score;
      };
   };
   // console.log(acc);
   let bestFilm = filmsYear.filter(films => (films.score === acc));
   return bestFilm;
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