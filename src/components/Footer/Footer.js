import React from 'react';
import EditorActions from '../../actions/EditorActions';
import './Footer.less';

class Footer extends React.Component {
  showEditor = () => {
    EditorActions.showEditor();
  }

  render() {
    return (
      <div className="Footer row">
        <div className="Footer__box col-lg-12 col-md-12 col-sm-12">
          <a className="Footer__title col-lg-4 col-lg-4 col-md-4 col-sm-4">
            f / avidadequem
          </a>
          <a onClick={this.showEditor} className="Footer__title--button col-lg-4 col-md-4 col-sm-4">
            Crie o seu ↑
          </a>
          <a className="Footer__title col-lg-4 col-md-4 col-sm-4">
            Feito com ❤️
          </a>
        </div>
      </div>
    );
  };
}

export default Footer;
