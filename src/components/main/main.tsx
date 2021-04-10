import * as React from "react";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import PlayButton from "../buttons/play/play";
import InListButton from "../buttons/inList/inList";
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
              <PlayButton movieId={promoMovie.id} />
              <InListButton isFavorite={promoMovie.isFavorite} id={promoMovie.id} />
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
