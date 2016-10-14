import React from 'react';
import './Like.less';

class Like extends React.Component {
  handleClick = (e) => {
    e.preventDefault();

    this.props.increaseLike();
  };

  render() {
    return (
      <div className="Like row">
        <div className="col-lg-12">
          <span className="Like__qty pull-right">
            { this.props.likes }
          </span>
          <a
            className="Like__button pull-right"
            href="#"
            onClick={this.handleClick}
          >
            Like
          </a>
        </div>
      </div>
    );
  };
}

export default Like;
