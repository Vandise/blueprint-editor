import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Editor from './containers/editor';
import Cards from './containers/cards';

// if using redux for state management:
// import { Provider } from 'react-redux';

// eslint-disable-next-line no-unused-vars
import Style from './stylesheets/main.scss';

const el = document.getElementById('app');

export default ReactDOM.render(
  <div>
    <DragDropContextProvider backend={HTML5Backend}>
      <div>
        <Cards />
        <Editor />
      </div>
    </DragDropContextProvider>
  </div>, el
);
