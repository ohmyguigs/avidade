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

  nameChange = (e) => {
    this.setState({name: e.target.value});
  }

  postChange = (e) => {
    this.setState({post: e.target.value});
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
          <CirclePicker className="Editor__picker" onChange={this.colorChange.bind(this)} colors={colors} width="220"  />
          <div className="Editor__inputs">
            Robson: <input value={this.state.name} onChange={this.nameChange} type="text" className="Editor__inputs--nome" />
            Vida:
            <textarea cols="15" rows="5" value={this.state.post} onChange={this.postChange} type="text" className="Editor__inputs--post">
            </textarea>
          </div>
        </div>
      </div>
    );
  };
}

export default Editor;
