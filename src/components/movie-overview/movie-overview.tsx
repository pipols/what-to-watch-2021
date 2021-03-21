import * as React from "react";
import {MovieType} from "../../types";

type Props = {
  movie: MovieType;
};

const MovieOverview = (props: Props) => {
  const {movie} = props;

  return (
    <>
    <div className="movie-rating">
      <div className="movie-rating__score">{movie.scoresCount}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">{`${movie.rating} ratings`}</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{movie.description}</p>

      {/* <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p> */}

      <p className="movie-card__director"><strong>{`Director: ${movie.director}`}</strong></p>

      <p className="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
    </div>
    </>
  );
};

export default MovieOverview;
