import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import BaseCard from './baseCard';
import cardMixin from '../util/mixins/card';
import Constants from '../constants/';
import DragDropEvents from '../util/cards/dragDropEvents';

@DragSource(Constants.cardTypes.TEXT_CARD, DragDropEvents, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class TextCard extends cardMixin(BaseCard) {

  renderers = {
    editor: () => {
      const { isDragging, connectDragSource } = this.props;
      const { name } = this.props;
      const opacity = isDragging ? 0.4 : 1;
      return (
        <div className='text-card' style={{ opacity }}>
          {name}
        </div>
      );
    },
  };

}
