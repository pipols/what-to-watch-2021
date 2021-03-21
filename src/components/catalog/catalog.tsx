import * as React from "react";
import MovieCard from "../movie-card/movie-card";
import {connect} from "react-redux";
import {getMovies} from "./../../reducer/data/selector";
import {MovieType} from "./../../types";
import {getGenresFromMovies} from "../../utils/utils";

type Props = {
  activeGenre: string;
  movies: MovieType[];
};

const Catalog = (props: Props) => {
  const {movies} = props;
  const genres = getGenresFromMovies(movies);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        {genres.map((genre) =>
          <li className="catalog__genres-item" key={genre}>
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        )}
      </ul>

      <div className="catalog__movies-list">
        {/* @ts-ignore: Unreachable code error */}
        {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps)(Catalog);
