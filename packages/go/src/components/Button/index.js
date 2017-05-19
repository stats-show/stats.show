import React, { Component, PropTypes } from 'react';
import { bindClass } from '../../utils';

import './index.css';

class Button extends Component {
  constructor(props) {
    super(props);
    bindClass(this);
  }

  handleClick() {
    const {
      handleClick,
      payload
    } = this.props;

    handleClick(payload);
  }

  render() {
    const { children, className } = this.props;
    return (
      <button onClick={this.handleClick} className={`${className} Button`}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  payload: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
