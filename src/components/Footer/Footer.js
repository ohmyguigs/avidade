import React from 'react';
import EditorActions from '../../actions/EditorActions';
import './Footer.less';

  class Footer extends React.Component {
    showEditor = () => {
      EditorActions.toggleEditor();
    }

  render() {
    return (
      <div className="Footer">
        <div className="Footer__box container">
          <p className="Footer__title--fb text-left hidden-sm hidden-xs col-md-4">
            fb/avidadequem <div className="fb-like" data-href="https://www.facebook.com/avidadequem/" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
          </p>
          <a onClick={this.showEditor} className="Footer__title--btn btn btn__cta text-center col-xs-12 col-md-4">
            Compartilhe o Seu
            {
              this.props.isEditing ?
              <i className="glyphicon glyphicon-arrow-down"></i>
              :
              <i className="glyphicon glyphicon-arrow-up"></i>

            }
          </a>

          <p className="Footer__title--love text-right hidden-sm hidden-xs col-md-4">
            Feito com ❤️
          </p>
        </div>
      </div>
    );
  };
}

export default Footer;
