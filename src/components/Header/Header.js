import React from 'react';
import './Header.less';

class Header extends React.Component {
  render() {
    return (
      <div className="Header container">
        <div>
          <h3 className="Header__brand">
            Avidade / Quem ?
          </h3>
          <div className="Header__nav">
            <a href="#" className="Header__option">
              Porque?
            </a>
            <a href="#" className="Header__option">
              Top Nomes
            </a>
            <a onClick={this.showEditor} className="Footer__title btn btn__cta">
              Crie o Seu Próprio <i className="glyphicon glyphicon-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    );
  };
}

export default Header;
