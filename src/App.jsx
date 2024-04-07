import { useState } from "react";
import Chat from "./components/HomeComponents/Chat";

const styles = {
  customPositioning: {
    position: "fixed",
    bottom: "1.25rem",
    left: "2rem",
    marginLeft: "0.75rem",
    zIndex: "50",
  },
};

function App() {
  const [message, setMessage] = useState([
    { sender: "user", message: "Hi, I need support.", time: "12:00" },
    {
      sender: "manager",
      message: "Hello, how can I assist you?",
      time: "12:01",
    },
    {
      sender: "user",
      message: "I'm having trouble with my account.",
      time: "12:02",
    },
    {
      sender: "manager",
      message: "Sure, please provide me with your account details.",
      time: "12:03",
    },
    {
      sender: "user",
      message: "My account email is example@example.com",
      time: "12:04",
    },
    {
      sender: "manager",
      message: "Thank you. Let me check your account details.",
      time: "12:05",
    },
    {
      sender: "manager",
      message:
        "I have resolved the issue. Is there anything else I can assist you with?",
      time: "12:06",
    },
  ]);

  const changeMessage = (msg) => {
    setMessage([...message, msg]);
  };

  return (
    <>
      <Chat
        position={styles.customPositioning}
        message={message}
        changeMessage={changeMessage}
      />
    </>
  );
}

export default App;
