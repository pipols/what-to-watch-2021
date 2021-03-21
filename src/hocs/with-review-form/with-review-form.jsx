import React from "react";


const withReviewForm = (Component) => (
  class WithReviewForm extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleFieldChange = this.handleFieldChange.bind(this);

      this.state = {
        isTextareaValid: false,
        rating: `1`,
        reviewText: null
      };
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return <Component
        {...this.props}
        onFieldChange={this.handleFieldChange}
        isTextareaValid={this.state.isTextareaValid}
        rating={this.state.rating}
        reviewText={this.state.reviewText} />;
    }
  }
);

export default withReviewForm;
