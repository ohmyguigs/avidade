import React from 'react';
import './Header.less';

class Header extends React.Component {
  render() {
    return (
      <div className="Header container">
        <div>
          <h3 className="Header__brand">
            Avidade
          </h3>
          <div className="Header__nav">
            <a href="#" className="Header__option">
              Porque?
            </a>
            <a href="#" className="Header__option">
              Top Nomes
            </a>
            <a href="#" className="Header__option btn btn__cta">
              Crie seu próprio
            </a>
          </div>
        </div>
      </div>
    );
  };
}

export default Header;
