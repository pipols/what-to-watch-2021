import * as React from "react";
import Footer from "../footer/footer";
import Logo from "../logo/logo";
import MovieCard from "../movie-card/movie-card";
import UserBlock from "../userBlock/userBlock";
import {MovieType} from "../../types";
import {connect} from "react-redux";
import {getMovieById, getSimilarMovies} from "./../../reducer/data/selector";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import Preloader from "../preloader/preloader";
import {TabName} from "../../const/common";
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {DataOperation} from "../../reducer/data/data";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons";

const activeClass = `movie-nav__item--active`;

type Props = {
  movieId: number;
  movie: MovieType;
  similarMovies: MovieType[];
  onItemClick: (arg: TabName) => TabName;
  activeItem: TabName;
  onCommentsMount: (arg: MovieType[`id`]) => void;
};

class Movie extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.onCommentsMount(this.props.movieId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movie !== undefined) {
      if (this.props.movie.id !== prevProps.movie.id) {
        this.props.onItemClick(TabName.OVERVIEW);
        this.props.onCommentsMount(this.props.movieId);
      }
    }
  }

  render() {
    const {movie, similarMovies, activeItem, onItemClick} = this.props;
    const activeTab = activeItem || TabName.OVERVIEW;
    if (movie === undefined) {
      return <Preloader />;
    } else {
      return (
      <><section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.released}</span>
              </p>
              <MovieCardButtons movieId={movie.id} />
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movie.posterImage} alt={`${movie.name} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className={`movie-nav__item ${activeTab === TabName.OVERVIEW ? activeClass : ``}`}>
                    <a className="movie-nav__link" onClick={() => onItemClick(TabName.OVERVIEW)}>Overview</a>
                  </li>
                  <li className={`movie-nav__item ${activeTab === TabName.DETAILS ? activeClass : ``}`}>
                    <a className="movie-nav__link" onClick={() => onItemClick(TabName.DETAILS)}>Details</a>
                  </li>
                  <li className={`movie-nav__item ${activeTab === TabName.REVIEWS ? activeClass : ``}`}>
                    <a className="movie-nav__link" onClick={() => onItemClick(TabName.REVIEWS)}>Reviews</a>
                  </li>
                </ul>
              </nav>

              {activeTab === TabName.OVERVIEW && <MovieOverview movie={movie}/>}
              {activeTab === TabName.DETAILS && <MovieDetails movie={movie}/>}
              {activeTab === TabName.REVIEWS && <MovieReviews movieId={movie.id}/>}

            </div>
          </div>
        </div>
      </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__movies-list">
              {/* @ts-ignore: Unreachable code error */}
              {similarMovies.map((mov) => <MovieCard movie={mov} key={mov.id} />)}
            </div>
          </section>

          <Footer />
        </div></>
      );
    }
  }
}

const mapStateToProps = (state, props) => ({
  movie: getMovieById(state, props.movieId),
  similarMovies: getSimilarMovies(state, props.movieId),
});

const mapDispatchToProps = (dispatch) => ({
  onCommentsMount(id) {
    dispatch(DataOperation.loadComments(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(Movie));
