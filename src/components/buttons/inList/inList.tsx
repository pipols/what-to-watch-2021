import * as React from "react";

type Props = {
  isFavorite: boolean;
};

const InList = ({isFavorite}: Props) => {
  return (
    <button className="btn btn--list movie-card__button" type="button">

      {isFavorite &&
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>}

      {isFavorite ||
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>}

      <span>My list</span>
    </button>
  );
};

export default InList;
