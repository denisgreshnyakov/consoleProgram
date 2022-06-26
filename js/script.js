"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat === false) {
      console.dir(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером: ${i + 1}?`);
      if (genre === "" || genre === null) {
        i--;
        continue;
      }
      personalMovieDB.genres[i] = genre;
    }
    personalMovieDB.genres.forEach(function (currentValue, index) {
      console.log(`Любимый жанр #${index + 1} - это ${currentValue}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat === false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

console.log(personalMovieDB);
