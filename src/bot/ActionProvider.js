import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleEnv = () => {
    const botMessage = createChatBotMessage(
      "Select an Environment",
      {
        widget: 'envList',
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
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
      userQuery:message
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello, handleDog, handleEnv,handleRequest
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;