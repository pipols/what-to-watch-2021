import * as React from "react";
import Footer from "../footer/footer";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {DataOperation} from "../../reducer/data/data";
import {connect} from "react-redux";
import {getFavoritesMovies} from "./../../reducer/data/selector";
import {MovieType} from "../../types";
import Preloader from "./../preloader/preloader";

type Props = {
  onFavoriteMoviesMount: () => any;
  favoritesMovies: MovieType[];
};

class MyList extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.onFavoriteMoviesMount();
  }

  render() {
    const {favoritesMovies} = this.props;
    console.log(favoritesMovies)
    return (
        <div className="user-page">
          <header className="page-header user-page__head">
            <Logo />
            <h1 className="page-title user-page__title">My list</h1>
            <UserBlock />
          </header>

          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <div className="catalog__movies-list">

              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
                </h3>
              </article>

              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/shutter-island.jpg" alt="Shutter Island" width="280" height="175" />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">Shutter Island</a>
                </h3>
              </article>

            </div>
          </section>

          <Footer />
        </div>
      );
    }
};

const mapStateToProps = (state) => ({
  favoritesMovies: getFavoritesMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteMoviesMount() {
    dispatch(DataOperation.loadFavoritesMovies())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
