import flux from '../flux';
import EditorActions from '../actions/EditorActions';

class EditorStore {
  constructor() {
    this.isEditing = false;
    this.bindListeners({
      onToggleEditor: EditorActions.TOGGLE_EDITOR
    });
  }

  onToggleEditor() {
    this.isEditing = !this.isEditing;
  }
}

module.exports = flux.createStore(EditorStore, 'EditorStore');
