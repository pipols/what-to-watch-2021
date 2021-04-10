import * as React from "react";
import {connect} from "react-redux";
import {DataOperation} from "../../../reducer/data/data";

type Props = {
  isFavorite: boolean;
  id: number;
  onPostFavorite: (id: number, status: boolean) => void;
};

const InList = ({isFavorite, id, onPostFavorite}: Props) => {
  return (
    <button onClick={() => onPostFavorite(id, isFavorite)} className="btn btn--list movie-card__button" type="button">

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

const mapDispatchToProps = (dispatch) => ({
  onPostFavorite(id, status) {
    dispatch(DataOperation.postFavorite(id, +!status));
  }
});

export default connect(null, mapDispatchToProps)(InList);
