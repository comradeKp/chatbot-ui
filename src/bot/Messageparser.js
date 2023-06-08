import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // actions.handleRequest(message);
    // if (message.includes('hello')) {
    //   actions.handleHello();
    // }
    // if (message.includes('dog')) {
    //   actions.handleDog();
    // }
    console.log(message);
    actions.handleRequest(message);
    // if (message.toLowerCase().includes('emap')||message.toLowerCase().includes('erl')) {
    //   actions.handleEnv(message);
    // }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;