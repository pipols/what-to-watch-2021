import * as React from "react";
import Footer from "../footer/footer";
import Logo from "../logo/logo";
import {Formik} from "formik";
import * as yup from "yup";

const SignIn = () => {
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
          onSubmit={(values) => console.log(values)}
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => {
          <form action="#" onSubmit={handleSubmit} className="sign-in__form">
            <div className="sign-in__fields">

              {touched.email && errors.email &&
              <div className="sign-in__message">
                <p>Please enter a valid email address</p>
              </div>}

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
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
             <button
               className="sign-in__btn"
               type="submit"
               disabled={isValid && !dirty}
               >Sign in</button>
            </div>
          </form>
          }}
        </Formik>

      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
