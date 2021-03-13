export const extend = (a, b) => Object.assign({}, a, b);

export const getGenresFromMovies = (movies) => {
  let set = new Set();

  movies.map((movie) => set.add(movie.genre));
  return [...set];
};
