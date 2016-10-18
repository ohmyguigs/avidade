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

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas = () => {
        const ctx = this.refs.canvas.getContext('2d');
        let data = (
          <svg>
            <foreignObject width="100%" height="100%">
              <Post className="Editor__post col-lg-12"
                    name={this.state.name}
                    post={this.state.post}
                    backgroundColor={this.state.backgroundColor} />
            </foreignObject>
          </svg>
        );
        let DOMURL = window.URL || window.webkitURL || window;
        let img = new Image();
        let svg = new Blob([data], {type: 'image/svg+xml'});
        let url = DOMURL.createObjectURL(svg);
        img.onload = () => {
          ctx.drawImage(img, 0, 0);
          DOMURL.revokeObjectURL(url);
        }
        img.src = url;
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

          <div className="col-xs-12 col-lg-4">
             <canvas ref="canvas" />
            <div class="clearfix"></div>
            <CirclePicker className="Editor__picker" onChange={this.colorChange.bind(this)} colors={colors}/>
          </div>
          <form className="Editor__inputs form-group col-xm-12 col-sm-12 col-lg-8">
            <label for="cardname">Nome:</label>
            <input value={this.state.name} onChange={this.nameChange} type="text" className="Editor__inputs--nome form-control" />
            <label for="cardtext">Texto:</label>
            <textarea cols="15" rows="5" value={this.state.post} onChange={this.postChange} type="text" className="Editor__inputs--post form-control">
            </textarea>
          </form>
        </div>
      </div>
    );
  };
}

export default Editor;
