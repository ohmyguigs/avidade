import React from 'react';
import './Post.less';
import ReactFitText from 'react-fittext';

class Post extends React.Component {

  render() {
    const { backgroundColor } = this.props;
    return (
      <div className="Post" style={{backgroundColor: backgroundColor}}>
        <div className="Post__box">
          <div className="Post__box--content">
              <ReactFitText compressor={0.75} minFontSize={25}>
                <h2 className="Post__name" >
                  { this.props.name }
                </h2>
              </ReactFitText>
              <ReactFitText compressor={0.75} minFontSize={25}>
                <h2 className="Post__text">
                  { this.props.post }
                </h2>
              </ReactFitText>
                <div className="Post__footer">
                  <ReactFitText compressor={3} minFontSize={18}>
                    <p className="Post__footer--text"><i className="glyphicon__fb">f</i> / avidadequem</p>
                  </ReactFitText>
                </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Post;
