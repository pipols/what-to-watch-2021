import * as React from "react";
import MovieCard from "../movie-card/movie-card";
import {connect} from "react-redux";
import {getMovies} from "./../../reducer/data/selector";
import {MovieType} from "./../../types";
import {getGenresFromMovies} from "../../utils/utils";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {DEFAULT_GENRE} from "../../const/common";

type Props = {
  activeGenre: string;
  movies: MovieType[];
  activeItem: null | string;
  onItemClick: (arg: null | string) => null | string;
};

const ACTIVE_GENRE_CLASS = `catalog__genres-item--active`;

class Catalog extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.onGenreClick = this.onGenreClick.bind(this);
  }

  onGenreClick(evt, genre) {
    evt.preventDefault();
    this.props.onItemClick(genre);
  }

  render() {
    const {movies, activeItem} = this.props;
    const genres = getGenresFromMovies(movies);
    const activeGenre = activeItem || DEFAULT_GENRE;
    const 

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          {genres.map((genre) =>
            <li className={`catalog__genres-item ${activeGenre === genre ? ACTIVE_GENRE_CLASS : ``}`} key={genre}>
              <a onClick={(evt) => this.onGenreClick(evt, genre)} href="#" className="catalog__genres-link">{genre}</a>
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
  }
}

const mapStateToProps = (state) => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps)(withActiveItem(Catalog));
