import * as React from "react";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import Logo from "../logo/logo";
import UserBlock from "../userBlock/userBlock";
import {MovieType} from "../../types";
import {connect} from "react-redux";
import {getPromoMovie} from "../../reducer/data/selector.js";

type Props = {
  promoMovie: MovieType;
};

const Main = (props: Props) => {
  const {promoMovie} = props;

  return (
    <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoMovie.backgroundImage} alt={promoMovie.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <Logo />
        <UserBlock />
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoMovie.posterImage} alt={`${promoMovie.name} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoMovie.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoMovie.genre}</span>
              <span className="movie-card__year">{promoMovie.released}</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <Catalog />
      <Footer />
    </div>
    </ >
  );
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
});

export default connect(mapStateToProps)(Main);
