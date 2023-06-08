import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleRequest = (message) => {
    const botMessage = createChatBotMessage(
      "Below is the response:",
      {
        widget: 'requestWidget',
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      userQuery: message
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleRequest
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;