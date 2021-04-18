import * as React from "react";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {connect} from "react-redux";
import {getMovieById} from "./../../reducer/data/selector";
import {MovieType} from "../../types";
import {Formik, Form, Field} from "formik";
import {DataOperation} from "../../reducer/data/data";
import {ActionCreator as StateActionCreator} from "../../reducer/state/state";
import Preloader from "../preloader/preloader";

type Props = {
  movieId: number;
  movie: MovieType;
  onReviewSubmit: (id: number, comment: object) => void;
};

const AddReview = (props: Props) => {
  const {movie, onReviewSubmit} = props;
  if (movie === undefined) {
    return <Preloader/>;
  } else {
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />
            <Breadcrumbs />
            <UserBlock />
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={movie.posterImage} alt={`${movie.name} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <Formik
            initialValues={{
              comment: ``,
              rating: 3,
            }}

            onSubmit={(values) => onReviewSubmit(props.movieId, values)}
          >
            {({values, isValid}) => (

              <Form className="add-review__form">
                <div className="rating">
                  <div className="rating__stars">
                    <Field className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
                    <label className="rating__label" htmlFor="star-1">Rating 1</label>

                    <Field className="rating__input" id="star-2" type="radio" name="rating" value="2" />
                    <label className="rating__label" htmlFor="star-2">Rating 2</label>

                    <Field className="rating__input" id="star-3" type="radio" name="rating" value="3" checked />
                    <label className="rating__label" htmlFor="star-3">Rating 3</label>

                    <Field className="rating__input" id="star-4" type="radio" name="rating" value="4" />
                    <label className="rating__label" htmlFor="star-4">Rating 4</label>

                    <Field className="rating__input" id="star-5" type="radio" name="rating" value="5" />
                    <label className="rating__label" htmlFor="star-5">Rating 5</label>
                  </div>
                </div>

                <div className="add-review__text">
                  <Field
                    as="textarea"
                    className="add-review__textarea"
                    name="comment"
                    id="review-text"
                    placeholder="Review text"
                    required
                    minLength={5}
                    maxLength={400}
                    value={values.comment}
                  ></Field>
                  <div className="add-review__submit">
                    <button disabled={!isValid} className="add-review__btn" type="submit">Post</button>
                  </div>

                </div>
              </Form>
            )}
          </Formik>
        </div>

      </section>
    );
  }
};

const mapStateToProps = (state, props) => ({
  movie: getMovieById(state, props.movieId),
});

const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit(id, comment) {
    dispatch(DataOperation.postComment(id, comment));
    dispatch(StateActionCreator.setReviewFormDisabledStatus(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
