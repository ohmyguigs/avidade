import React from 'react';
import './Headline.less';

class Headline extends React.Component {
  render() {
    return (
      <div className="Headline container">
        <div>
          <h1 className="Headline__text">
            A Vida de Quem?
          </h1>
          <h4>
            O seu meme escrito da sua forma sobre a sua vida.
          </h4>
        </div>
      </div>
    );
  };
}

export default Headline;
