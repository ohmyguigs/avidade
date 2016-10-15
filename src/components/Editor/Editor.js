import React from 'react';
import { CirclePicker } from 'react-color';
import Post from '../PostList/Post/Post';
import './Editor.less';

class Editor extends React.Component {
  componentWillMount() {
    this.setState({
      name: 'Robson',
      post: 'curte um pão na chapa da padoca',
      backgroundColor: '#48B895',
    });
  }

  colorChange = (color) => {
    this.setState({backgroundColor: color.hex.toString()});
  }

  render() {
    const colors = ['#FFB840','#FF925B','#FF695B','#4BBF51','#48B895','#32ACD0','#E461DF','#9C70D4','#5A8EDF'];

    return (
      <div className="Editor">
        <div className="Editor__canvas container">
          <Post className="Editor__post"
                name={this.state.name}
                post={this.state.post}
                backgroundColor={this.state.backgroundColor} />
        </div>
        <hr/>
        <CirclePicker onChange={this.colorChange.bind(this)} colors={colors} width="220"  />
      </div>
    );
  };
}

export default Editor;
