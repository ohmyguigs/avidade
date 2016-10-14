import flux from '../flux';

class EditorActions {
  showEditor() {
    console.log('AGORA SIM');
    return (dispatch) => {
      dispatch();
    };
  }
}

module.exports = flux.createActions(EditorActions);
