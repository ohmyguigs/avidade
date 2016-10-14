import React from 'react';
import './PostList.less';
import Post from './Post/Post';

class PostList extends React.Component {
  render() {
    const { previewPost } = this.props;
    const reversedPosts = [...this.props.posts].reverse();
    const posts = reversedPosts.map((post, index) => {
      return (
        <div key={index}>
          <hr />
          <Post
            {...post}
            increaseLike={this.props.increaseLike}
          />
        </div>
      );
    });

    return (
      <div className="PostList row">
        <div className="col-lg-8 col-lg-offset-2">
          {
            previewPost && previewPost.post.length > 0 ?
              <Post
                {...previewPost}
              /> : null
          }
          { posts }
        </div>
      </div>
    );
  };
}

export default PostList;
