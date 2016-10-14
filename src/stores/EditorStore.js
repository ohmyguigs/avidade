import flux from '../flux';
import EditorActions from '../actions/EditorActions';

class EditorStore {
  constructor() {
    this.bindListeners({
      onShowEditor: EditorActions.SHOW_EDITOR
    });
  }

  onShowEditor() {
    console.log('EITA STORE');
  }
}

module.exports = flux.createStore(EditorStore, 'EditorStore');
