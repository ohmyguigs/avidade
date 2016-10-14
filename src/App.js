import React from 'react';
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';

class App extends React.Component {
  componentWillMount() {
    const names = [
      'Sibelius',
      'Cleyton',
      'Eduarda',
      'Bernardo',
      'Rafael',
      'Glauber',
      'Gabriel',
      'Jussara',
      'Carolina',
      'Geovana',
      'Michel'
    ];
    const posts = [
      {
        id: 0,
        name: 'Geovana',
        post: 'deixa forninhos cairem',
        likes: 100
      },
      {
        id: 1,
        name: 'Sibelius',
        post: 'come coisa estragada',
        likes: 1
      },
      {
        id: 2,
        name: 'Thor',
        post: 'ainda brinca de pique-pega',
        likes: 0
      },
      {
        id: 3,
        name: 'Guido',
        post: 'gosta de nadar sem roupa',
        likes: 2
      }
    ];

    this.setState({
      posts,
      names
    });
  }

  componentDidMount() {
    this.shuffleNames();
  }

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

  shuffleNames = () => {
    const { names, posts } = this.state;

    let newPosts = posts.map((post) => {
      post.name = names[Math.floor((Math.random() * names.length) + 0)];
      return post;
    });
    this.setState({posts: newPosts});
    setTimeout(() => {
      this.shuffleNames()
    }, 1200);
  };

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <PostList
          {...this.state}
          increaseLike={this.increaseLike}
        />
      </div>
    );
  };
}

export default App;
