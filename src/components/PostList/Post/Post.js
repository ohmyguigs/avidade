import React from 'react';
import './Post.less';
import Like from './Like/Like';

class Post extends React.Component {
  increaseLike = () => {
    this.props.increaseLike(this.props.id);
  };

  render() {
    return (
      <div className="Post col-lg-4">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="Post__name">
              { this.props.name + ' ' + this.props.post}
            </h2>
          </div>
        </div>
        {
          this.props.increaseLike ?
            <Like
              likes={this.props.likes}
              increaseLike={this.increaseLike}
            /> : null
        }
      </div>
    );
  };
}

export default Post;
