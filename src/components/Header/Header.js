import React from 'react';
import './Header.less';

class Header extends React.Component {
  render() {
    return (
      <div className="Header navbar navbar-default container">
        <nav className="container-fluid">
          <div className="Header__bar navbar-header">
              <button type="button" className="navbar-toggle collapsed " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            <a className="navbar-brand" href="#">Avidade</a>
          </div>
          <div className="Header__nav collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#" className="Header__option">Quem?</a></li>
              <li><a href="#" className="Header__option">Porque?</a></li>
              <li><a href="#" className="Header__option">Top Nomes</a></li>
              <li>
                <a onClick={this.showEditor} className="Footer__title btn btn__cta hidden-xs">
                  Compartilhe o Seu <i className="glyphicon glyphicon-arrow-up"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  };
}

export default Header;
