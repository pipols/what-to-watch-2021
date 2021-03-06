import * as React from "react";
import Footer from "../footer/footer";
import Logo from "../logo/logo";
import {Formik} from "formik";
import * as Yup from "yup";
import {connect} from "react-redux";
import {Operation} from "../../reducer/user/user";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email(`Invalid email`)
    .required(`Required`),
  password: Yup.string()
    .min(2, `Too Short!`)
    .max(70, `Too Long!`)
    .required(`Required`),
});

type AuthData = {
  email: string;
  password: string;
};

type Props = {
  onLogin: (authData: AuthData) => void;
};

const SignIn = (props: Props) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <Formik
          initialValues={{
            email: ``,
            password: ``,
          }}

          validateOnBlur
          validationSchema={SignInSchema}
          onSubmit={props.onLogin}
        >
          {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
            <form onSubmit={handleSubmit} className="sign-in__form">

              {
                (touched.email || touched.password) &&
                (errors.email || errors.password) &&
                <div className="sign-in__message">
                  <p>{errors.email || errors.password}</p>
                </div>
              }

              <div className="sign-in__fields">
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="email"
                    placeholder="Email address"
                    name="email"
                    id="user-email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
                </div>
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="user-password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
                </div>
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit">Sign in</button>
              </div>
            </form>
          )}
        </Formik>

      </div>

      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLogin(authData) {
    dispatch(Operation.login(authData));
  }
});

export default connect(null, mapDispatchToProps)(SignIn);
