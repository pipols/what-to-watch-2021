import * as React from "react";
import {Subtract} from "utility-types";

interface State {
  activeItem: void;
}

interface InjectingProps {
  activeItem: void;
  onItemClick: (arg: void) => void;
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveItem extends React.PureComponent<T, State> {
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
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItem}
        onItemClick={this._setActiveItem} />;
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
