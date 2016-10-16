import React from 'react';
import './Headline.less';

class Headline extends React.Component {
  render() {
    return (
      <div className="Headline container">
        <div>
          <h1 className="Headline__text text-center">
            A Vida de Quem?
          </h1>
          <h4 className="Headline__text text-center">
            O seu meme escrito da sua forma sobre a sua vida.
          </h4>
        </div>
      </div>
    );
  };
}

export default Headline;
