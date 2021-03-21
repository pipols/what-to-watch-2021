import * as React from "react";
import { MovieType } from "../../types";
import {Link} from "react-router-dom";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const DELAY = 1000;
let timerId;

const setTimer = (bool, cb) => {
  timerId = setTimeout(() => cb(bool), DELAY);
};

const clearTimer = (cb) => {
  clearTimeout(timerId);
  cb(null);
};

type Props = {
  movie: MovieType,
  activeItem: true | null,
  onItemClick: (arg: true | null) => true | null,
};

const MovieCard = (props: Props) => {
  const {movie, activeItem, onItemClick} = props;
  const {previewImage, name, id, previewVideoLink} = movie;
  console.log(activeItem);
  return (
    <article
      onMouseEnter={() => setTimer(true, onItemClick)}
      onMouseLeave={() => clearTimer(onItemClick)}
      className="small-movie-card catalog__movies-card">
      <Link to={`/films/${id}`} >
        <div className="small-movie-card__image">
          {activeItem === null ? <img src={previewImage} alt={name} width="280" height="175" /> : ``}
          {activeItem === true ? <video src={previewVideoLink} autoPlay muted width="280" height="175"/> : ``}
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

export default (withActiveItem(MovieCard));
