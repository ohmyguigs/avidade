import flux from '../flux';

class EditorActions {
  toggleEditor() {
    return (dispatch) => {
      dispatch();
    };
  }
}

module.exports = flux.createActions(EditorActions);
