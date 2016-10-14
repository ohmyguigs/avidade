import React from 'react';
import './Header.less';

class Header extends React.Component {
  render() {
    return (
      <div className="Header row">
        <div className="col-lg-12">
          <h1 className="Header__title col-lg-6">
            Avidade
          </h1>
          <h3 className="Header__option col-lg-2">
            Porque?
          </h3>
          <h3 className="Header__option col-lg-2">
            Top Nomes
          </h3>
          <h3 className="Header__option col-lg-2">
            Crie seu próprio
          </h3>
        </div>
      </div>
    );
  };
}

export default Header;
