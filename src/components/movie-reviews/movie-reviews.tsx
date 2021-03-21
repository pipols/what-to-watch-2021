import * as React from "react";
import {CommentType, MovieType} from "../../types";
import Review from "../review/review";
import {connect} from "react-redux";
import {getComments} from "../../reducer/data/selector";

type Props = {
  comments: CommentType[];
  movieId: MovieType[`id`];
};

class MovieReviews extends React.PureComponent<Props> {
  render() {
    const {comments} = this.props;
    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {comments.map((comment, i) => i % 2 ? null : <Review key={comment.id} comment={comment} />)}
        </div>
        <div className="movie-card__reviews-col">
          {comments.map((comment, i) => i % 2 ? <Review key={comment.id} comment={comment} /> : null)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: getComments(state),
});

export default connect(mapStateToProps)(MovieReviews);
