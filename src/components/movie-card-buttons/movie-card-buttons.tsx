import * as React from "react";
import {Link} from "react-router-dom";

type Props = {
  movieId: number;
};

const MovieCardButtons = (props: Props) => {
  const {movieId} = props;

  return (
    <div className="movie-card__buttons">
      <Link to={`/player/${movieId}`} className="btn btn--play movie-card__button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
      <a href="add-review.html" className="btn movie-card__button">Add review</a>
    </div>
  );
};

export default MovieCardButtons;

