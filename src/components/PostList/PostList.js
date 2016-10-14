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
          <Post
            {...post}
            increaseLike={this.props.increaseLike}
          />
        </div>
      );
    });

    return (
      <div className="PostList row">
        {
          previewPost && previewPost.post.length > 0 ?
            <Post
              {...previewPost}
            /> : null
        }
        { posts }
      </div>
    );
  };
}

export default PostList;
