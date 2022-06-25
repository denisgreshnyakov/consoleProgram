"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

console.log(personalMovieDB);

const watchedMovies1 = prompt("Один из последних просмотренных фильмов?");
const filmScore1 = prompt("На сколько оцените его?");
const watchedMovies2 = prompt("Один из последних просмотренных фильмов?");
const filmScore2 = prompt("На сколько оцените его?");

personalMovieDB.movies[watchedMovies1] = filmScore1;
personalMovieDB.movies[watchedMovies2] = filmScore2;

console.log(personalMovieDB);
