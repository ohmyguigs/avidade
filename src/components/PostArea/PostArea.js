import React from 'react';
import './PostArea.less';

class PostArea extends React.Component {
  componentDidMount() {
    this.input.focus();
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addPost(this.makePost(this.input.value));
    this.input.value = '';
    this.props.updatePreviewPost(null);
  };

  handleChange = (e) => {
    const previewPost = this.makePost(e.target.value);

    this.props.updatePreviewPost(previewPost);
  }

  getTodayDate = () => {
    const today = new Date();
    const day = today.getDate();
    const saneDay = day >= 10 ? day : '0' + day;
    const month = today.getMonth() + 1;
    const saneMonth = month <= 10 ? month : '0' + month;
    const year = today.getFullYear();
    const saneToday = `${day}/${month}/${year}`;

    return saneToday;
  };

  makePost = (text) => {
    const post = {
      name: 'VTEX',
      post: text,
      postedAt: this.getTodayDate(),
      likes: 0
    };

    return post;
  }

  render() {
    return (
      <div className="PostArea row">
        <div className="col-lg-8 col-lg-offset-2">
          <form onSubmit={this.handleSubmit}>
            <input
              ref={(ref) => this.input = ref}
              className="form-control"
              type="text"
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  };
}

export default PostArea;
