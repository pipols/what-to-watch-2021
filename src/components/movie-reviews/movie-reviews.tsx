import * as React from "react";
import {CommentType, MovieType} from "../../types";
import Review from "../review/review";
import { connect } from 'react-redux';
import {getComments} from "../../reducer/data/selector";
import {DataOperation} from "../../reducer/data/data";

type Props = {
  comments: CommentType[],
  movieId: MovieType[`id`],
  onCommentsMount: (arg: MovieType[`id`]) => void,
};

class MovieReviews extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.onCommentsMount(this.props.movieId);
  };

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
  );}
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCommentsMount(id) {
    dispatch(DataOperation.loadComments(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieReviews);
