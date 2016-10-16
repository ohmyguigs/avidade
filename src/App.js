import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PostList from './components/PostList/PostList';
import Editor from './components/Editor/Editor';
import Headline from './components/Headline/Headline';
import './App.less';

import EditorStore from './stores/EditorStore';

class App extends React.Component {
  componentWillMount() {
    const names = [
      'Robson',
      'Robson',
      'Robson',
      'Robson',
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
        id: 4,
        name: 'Carolina',
        post: 'faz a unha e depois estraga tudo no zipper',
        backgroundColor: '#48B895'
      },
      {
        id: 5,
        name: 'Jussara',
        post: 'come carboidrato depois das seis',
        backgroundColor: '#32ACD0'
      },
      {
        id: 6,
        name: 'Juliana',
        post: 'paga a academia mas nunca vai',
        backgroundColor: '#E461DF'
      },
      {
        id: 7,
        name: 'Glauber',
        post: 'não nega um gole de xiboquinha',
        backgroundColor: '#9C70D4'
      },
      {
        id: 8,
        name: 'Edimilson',
        post: 'faz vergonha na pelada toda vez',
        backgroundColor: '#5A8EDF'
      }
    ];

    this.setState({
      posts,
      names,
      isEditing: false
    });
  }

  componentDidMount() {
    this.shuffleNames();
    EditorStore.listen(this.onChange);
  }

  componentWillUnmount() {
    EditorStore.unlisten(this.onChange);
  }

  onChange = (state) => {
    this.setState({isEditing: state.isEditing});
  }

  shuffleNames = (id = 7) => {
    const { names, posts } = this.state;

    let newPosts = posts.map((post) => {
      if (post.id === id) {
        post.name = names[Math.floor((Math.random() * names.length) + 0)];
      }
      return post;
    });

    this.setState({posts: newPosts});

    setTimeout(() => {
      this.shuffleNames(Math.floor((Math.random() * posts.length) + 0));
    }, Math.floor((Math.random() * 200) + 100));
  }

  render() {
    return (
      <div className="Wrapper container">
        <Header />
        <Headline />
        {this.state.isEditing ?
          <Editor />
          :
          <PostList {...this.state} />
        }
        <Footer />
      </div>
    );
  };
}

export default App;
