import * as React from "react";

const withActiveItem = (Component) => (
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null
      };

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      // @ts-ignore: Unreachable code error
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItem}
        onItemClick={this._setActiveItem} />;
    }
  }
);

export default withActiveItem;
