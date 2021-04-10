import * as React from "react";
import {Link} from "react-router-dom";

type Props = {
  movieId: number;
};

const Play = ({movieId}: Props) => {
  return (
    <Link to={`/player/${movieId}`} className="btn btn--play movie-card__button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
};

export default Play;
