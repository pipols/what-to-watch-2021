import * as React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state";

type Props = {
  addStack: () => void;
};

const ShowMore = (props: Props) => {
  return (
    <div className="catalog__more">
      <button onClick={() => props.addStack()} className="catalog__button" type="button">Show more</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addStack() {
    dispatch(ActionCreator.addMoviesStack())
  }
});

export default connect(null, mapDispatchToProps)(ShowMore);
