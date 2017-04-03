import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import Constants from '../constants/';
import cardMixin from '../util/mixins/card';
import DragDropEvents from '../util/cards/dragDropEvents';

export default class BaseCard extends cardMixin(Component) {

  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
  };

  static renderers = {
    editor: () => {
      return (
        <div className='base-card'>
          <p>No data could be inferred</p>
        </div>
      );
    },
  };

}
