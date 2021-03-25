import * as React from "react";
import withActiveItem from './../../hocs/with-active-item/with-active-item';
import {DEFAULT_GENRE} from "../../const/common";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state";
import {getGenres} from "../../reducer/state/selector";

type Props = {
  genres: string[];
  activeItem: null | string;
  onItemClick: (genre: string) => string;
  setGenre: (genre: string) => string;
  resetGenre: () => void;
};

const ACTIVE_GENRE_CLASS = `catalog__genres-item--active`;

class GenresList extends React.PureComponent<Props> {
  onGenreClick(evt, genre) {
    evt.preventDefault();
    this.props.setGenre(genre);
    this.props.onItemClick(genre);
  };

  componentWillUnmount() {
    this.props.resetGenre();
  }

  render() {
    const {genres, activeItem} = this.props;
    const activeGenre = activeItem || DEFAULT_GENRE;

    return (
      <ul className="catalog__genres-list">
      {genres.map((genre) =>
        <li className={`catalog__genres-item ${activeGenre === genre ? ACTIVE_GENRE_CLASS : ``}`} key={genre}>
          <a
            onClick={(evt) => this.onGenreClick(evt, genre)}
            href="#"
            className="catalog__genres-link">{genre}
          </a>
        </li>
     )}
    </ul>
    );
  }
};

const mapStateToProps = (state) => ({
  genres: getGenres(state)
});

const mapDispatchToProps = (dispatch) => ({
  setGenre(genre) {
    dispatch(ActionCreator.setGenre(genre))
  },
  resetGenre() {
    dispatch(ActionCreator.resetGenre())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(GenresList));
