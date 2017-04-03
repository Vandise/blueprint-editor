export default {
  beginDrag(props) {
    return {
      name: props.name,
    };
  },
  
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert( // eslint-disable-line no-alert
        `You dropped ${item.name} into ${dropResult.name}!`,
      );
    }
  },
};