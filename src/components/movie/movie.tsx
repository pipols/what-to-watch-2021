import * as React from "react";
import Footer from "../footer/footer";
import Logo from "../logo/logo";
import MovieCard from "../movie-card/movie-card";
import UserBlock from "../userBlock/userBlock";
import {MovieType} from "../../types";
import { connect } from 'react-redux';
import { getMovieById, getSimilarMovies } from './../../reducer/data/selector';
import {useRouteMatch, Link, Switch, Route} from "react-router-dom";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import Preloader from "../preloader/preloader";
import {TabName} from "../../const/common";
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const activeClass = `movie-nav__item--active`;

type Props = {
  movieId: number,
  movie: MovieType,
  similarMovies: MovieType[],
  onItemClick: (arg: TabName) => TabName, // !
  activeItem: TabName,
};

const Movie = (props: Props) => {
  const {movie, similarMovies, activeItem, onItemClick} = props;
  let activeTab = activeItem || TabName.OVERVIEW;

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

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
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

            {activeTab === TabName.OVERVIEW && <MovieOverview />}
            {activeTab === TabName.DETAILS && <MovieDetails />}
            {activeTab === TabName.REVIEWS && <MovieReviews />}

          </div>
        </div>
      </div>
    </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            {similarMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
          </div>
        </section>

        <Footer />
      </div></>
  );
    };
};

const mapStateToProps = (state, props) => ({
  movie: getMovieById(state, props.movieId),
  similarMovies: getSimilarMovies(state, props.movieId),
});

export default connect(mapStateToProps)(withActiveItem(Movie));
