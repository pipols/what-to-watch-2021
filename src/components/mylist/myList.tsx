import * as React from "react";
import Footer from "../footer/footer";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {DataOperation} from "../../reducer/data/data";
import {connect} from "react-redux";
import {getFavoritesMovies} from "./../../reducer/data/selector";
import {MovieType} from "../../types";
import MovieCard from "../movie-card/movie-card";

type Props = {
  onFavoriteMoviesMount: () => void;
  favoritesMovies: MovieType[];
};

class MyList extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.onFavoriteMoviesMount();
  }

  render() {
    const {favoritesMovies} = this.props;
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
            {favoritesMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favoritesMovies: getFavoritesMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteMoviesMount() {
    dispatch(DataOperation.loadFavoritesMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
