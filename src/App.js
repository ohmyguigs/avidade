import React from 'react';
import Header from './components/Header/Header';
import PostArea from './components/PostArea/PostArea';
import PostList from './components/PostList/PostList';

class App extends React.Component {
  componentWillMount() {
    const posts = [
      {
        id: 0,
        name: 'Geovana',
        post: 'eita, forninho caiu...',
        postedAt: '01/03/2015',
        likes: 100
      },
      {
        id: 1,
        name: 'Tomattos',
        post: 'Sua mãe tá doente ):',
        postedAt: '16/02/2016',
        likes: 1
      },
      {
        id: 2,
        name: 'Thor',
        post: 'Qiss comofas reasct',
        postedAt: '16/0/2016',
        likes: 0
      },
      {
        id: 3,
        name: 'Guigs',
        post: 'Olar amigors :)',
        postedAt: '16/02/2016',
        likes: 2
      }
    ];

    this.setState({
      posts,
      previewPost: null
    });
  }

  addPost = (post) => {
    const lastPostIndex = this.state.posts.length - 1;
    const clonedPost = {
      id: this.state.posts[lastPostIndex].id + 1,
      ...post
    };
    const posts = [
      ...this.state.posts,
      clonedPost
    ];

    this.setState({ posts });
  };

  increaseLike = (id) => {
    const currentPosts = this.state.posts;
    const post = currentPosts[id];
    const clonedPost = {
      ...post,
      likes: post.likes + 1
    };
    const posts = [
      ...currentPosts.slice(0, id),
      clonedPost,
      ...currentPosts.slice(id + 1)
    ];

    this.setState({ posts });
  };

  updatePreviewPost = (previewPost) => {
    this.setState({ previewPost });
  };

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <PostArea
          addPost={this.addPost}
          updatePreviewPost={this.updatePreviewPost}
        />
        <PostList
          {...this.state}
          increaseLike={this.increaseLike}
        />
      </div>
    );
  };
}

export default App;
