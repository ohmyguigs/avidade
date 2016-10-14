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
      'Juliana',
      'Glauber',
      'Gabriel',
      'Jussara',
      'Carolina',
      'Geovana',
      'Michel',
      'Joelson'
    ];
    const posts = [
      {
        id: 0,
        name: 'Geovana',
        post: 'deixa forninhos cairem',
        backgroundColor: '#FFB840'
      },
      {
        id: 1,
        name: 'Sibelius',
        post: 'come coisa estragada',
        backgroundColor: '#FF925B'
      },
      {
        id: 2,
        name: 'Joelson',
        post: 'ainda brinca de pique-pega',
        backgroundColor: '#FF695B'
      },
      {
        id: 3,
        name: 'Michel',
        post: 'gosta de nadar sem roupa',
        backgroundColor: '#4BBF51'
      },
      {
        id: 3,
        name: 'Carolina',
        post: 'faz a unha e depois estraga tudo no zipper',
        backgroundColor: '#48B895'
      },
      {
        id: 3,
        name: 'Jussara',
        post: 'come carboidrato depois das seis',
        backgroundColor: '#32ACD0'
      },
      {
        id: 3,
        name: 'Juliana',
        post: 'paga a academia mas nunca vai',
        backgroundColor: '#E461DF'
      },
      {
        id: 3,
        name: 'Glauber',
        post: 'não nega um gole de xiboquinha',
        backgroundColor: '#9C70D4'
      },
      {
        id: 3,
        name: 'Edimilson',
        post: 'faz vergonha na pelada toda vez',
        backgroundColor: '#5A8EDF'
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
        />
      </div>
    );
  };
}

export default App;
