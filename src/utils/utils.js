import {DEFAULT_GENRE, MovieRatingText, MovieRatingNumber} from "./../const/common";

export const extend = (a, b) => Object.assign({}, a, b);

export const getGenresFromMovies = (movies) => {
  let set = new Set();

  movies.map((movie) => set.add(movie.genre));
  const genres = [...set];
  genres.unshift(DEFAULT_GENRE);

  return genres;
};


export const getRatingMovie = (rating) => {
  switch (rating) {
    case rating === MovieRatingNumber.BAD.MIN || rating < MovieRatingNumber.BAD.MAX:
      return MovieRatingText.BAD;
    case rating >= MovieRatingNumber.NORMAL.MIN && rating < MovieRatingNumber.NORMAL.MAX:
      return MovieRatingText.NORMAL;
    case rating >= MovieRatingNumber.GOOD.MIN && rating < MovieRatingNumber.GOOD.MAX:
      return MovieRatingText.GOOD;
    case rating >= MovieRatingNumber.VERY_GOOD.MIN && rating < MovieRatingNumber.VERY_GOOD.MAX:
      return MovieRatingText.VERY_GOOD;
    case rating === MovieRatingNumber.AWESOME:
      return MovieRatingText.AWESOME;
  }

  return rating;
};
