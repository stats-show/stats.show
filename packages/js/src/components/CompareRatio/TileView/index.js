import React, { PropTypes, Component } from 'react';
import StatsItem from '../../StatsItem';
import Button from '../../Button';
import { bindClass } from '../../../utils';

import './index.css';

class TileView extends Component {
  constructor(props) {
    super(props);
    bindClass(this);
  }

  render() {
    const { keys, data, handleRemove } = this.props;
    return (
      <div className="TileView">
        { keys.map(item =>
          <div key={`${data[item].user}${data[item].repo}`} className="TileView-item">
            <Button className="TileView-item-remove"
              handleClick={handleRemove}
              payload={item}>
            X
            </Button>
            <StatsItem data={data[item]}/>
          </div>
        )}
      </div>
    );
  }
}

TileView.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  keys: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired
};

export default TileView;