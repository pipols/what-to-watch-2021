import * as React from "react";
import MovieCard from "../movie-card/movie-card";
import {connect} from "react-redux";
import {getMoviesForCatalog} from "../../reducer/data/selector";
import {getShownMovieStack} from "../../reducer/state/selector";
import {MovieType} from "./../../types";
import ShowMore from "../show-more/show-more";
import GenresList from "../genres-list/genres-list";

type Props = {
  movies: MovieType[];
  movieStack: number;
};

class Catalog extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const {movieStack, movies} = this.props;
    const isShownMore = movieStack < movies.length;

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />

        <div className="catalog__movies-list">
          {/* @ts-ignore: Unreachable code error */}
          {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </div>

        {isShownMore && <ShowMore />}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: getMoviesForCatalog(state),
  movieStack: getShownMovieStack(state), //
});

export default connect(mapStateToProps)(Catalog);
