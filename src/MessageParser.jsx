// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('')) {
      // j'ai rajouter par moi j'ai enleve le message par défaut a la ligne 6
      actions.handleHello();
    }
    if (message.includes('chien')) {
      actions.handleDog();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;