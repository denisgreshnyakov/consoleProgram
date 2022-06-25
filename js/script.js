"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const watchedMovies = prompt("Один из последних просмотренных фильмов?");
  const filmScore = prompt("На сколько оцените его?");

  if (
    watchedMovies != null &&
    filmScore != null &&
    watchedMovies != "" &&
    filmScore != "" &&
    watchedMovies.length < 50
  ) {
    personalMovieDB.movies[watchedMovies] = filmScore;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);
