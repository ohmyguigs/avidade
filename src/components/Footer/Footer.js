import React from 'react';
import EditorActions from '../../actions/EditorActions';
import './Footer.less';

  class Footer extends React.Component {
    showEditor = () => {
      EditorActions.toggleEditor();
    }

  render() {
    return (
      <div className="Footer row">
        <div className="Footer__box container">
          <p className="Footer__title--fb text-left hidden-sm hidden-xs">
            f / avidadequem
          </p>
          <a onClick={this.showEditor} className="Footer__title--btn btn btn__cta text-center">
            Crie o Seu Próprio <i className="glyphicon glyphicon-arrow-up"></i>
          </a>

          <p className="Footer__title--love text-right hidden-sm hidden-xs">
            Feito com ❤️
          </p>
        </div>
      </div>
    );
  };
}

export default Footer;
