import * as React from "react";
import { MovieType } from "../../types";
import {Link} from "react-router-dom";

type Props = {
  movie: MovieType,
};

const MovieCard = (props: Props) => {
  const {movie} = props;
  const {previewImage, name, id} = movie;
  return (
    <article className="small-movie-card catalog__movies-card">
      <Link to={`/films/${id}`} >
        <div className="small-movie-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

export default MovieCard;
