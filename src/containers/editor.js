import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import Constants from '../constants/';

const boxTarget = {
  drop() {
    return { name: 'Editor' };
  },
};

@DropTarget(Constants.cardTypes.TEXT_CARD, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class Editor extends Component {

  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  };

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      <div>
        {isActive ? 'Release to drop' : 'Drag a box here'}
      </div>,
    );
  }
}