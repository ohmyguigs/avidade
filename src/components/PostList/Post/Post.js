import React from 'react';
import './Post.less';

class Post extends React.Component {

  render() {
    const { backgroundColor } = this.props;
    return (
      <div className="Post col-lg-4" style={{backgroundColor: backgroundColor}}>
        <div className="Post__footer">
          <hr/>
          <p className="Post__footer--text">facebook/avidade</p>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="Post__name">
              { this.props.name }
            </h2>
            <h2 className="Post__text">
              { this.props.post }
            </h2>
          </div>
        </div>
      </div>
    );
  };
}

export default Post;
