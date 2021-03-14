import React, {PureComponent} from "react";

const withSignIn = (Component) => (
  class WithSignIn extends PureComponent {
    constructor(props) {
      super(props);
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleEmailValidity = this.handleEmailValidity.bind(this);

      this.state = {
        email: null,
        password: null,
        isEmailValid: true,
      };
    }

    handleFieldChange(evt) {
      const {type, value} = evt.target;
      this.setState({[type]: value});
    }

    handleEmailValidity(evt) {
      this.setState({isEmailValid: evt.target.validity.valid});
    }

    render() {

      return <Component
        {...this.props}
        onSubmit={this.handleSubmit}
        onFieldChange={this.handleFieldChange}
        onEmailValidity={this.handleEmailValidity}
        email={this.state.email}
        password={this.state.password}
        isEmailValid={this.state.isEmailValid} />;
    }
  }
);

export default withSignIn;
