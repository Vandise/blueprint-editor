export default (Base) => class extends Base {

  renderer: null;

  componentWillMount() {
    this.setRenderer();
  }

  setRenderer() {
    if (!this.renderers || !this.renderers[this.props.format]) {
      this.renderer = Base.renderers[this.props.format];
    } else {
      this.renderer = this.renderers[this.props.format];
    }
  }

  render() {
    const { connectDragSource } = this.props;
    return connectDragSource(this.renderer.call(this)); 
  }

};