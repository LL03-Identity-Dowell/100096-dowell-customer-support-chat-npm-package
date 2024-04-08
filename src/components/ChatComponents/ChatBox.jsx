import React, { useState, useEffect, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import styles from "./ChatBoxStyles.jsx";
import Message from "./SubComponents/Message.jsx";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ChatBox = ({
  title,
  message,
  changeMessage,
  ContainerPosition,
  inputStyle,
  buttonStyle,
  toggleModal,
}) => {
  const [textMessage, setTextMessage] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    // Optionally, you can save the mode preference to localStorage or cookies
    // localStorage.setItem('darkMode', !darkMode);
  };
  const containerRef = useRef(null);

  useEffect(() => {
    // Function to scroll to the bottom of the container
    const scrollToBottom = () => {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    };

    // Scroll to bottom whenever items change
    scrollToBottom();
  }, [message]);

  const sendTextMessage = () => {
    if (textMessage.trim() !== "") {
      const time = new Date().toLocaleTimeString();
      changeMessage({
        sender: "user",
        message: textMessage,
        time: time,
      });
    }
    setTextMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendTextMessage();
    }
  };

  return (
    <div
      style={{
        ...styles.dowellContainer,
        ...ContainerPosition,
        backgroundColor: `${darkMode ? "#395177" : "#ffffff"}`,
        transitionDuration: "0.5s",
      }}
    >
      <div style={{ ...styles.headerContainer }}>
        <h5
          style={{
            ...styles.chatTitle,
            color: darkMode ? "#ffffff" : undefined,
          }}
        >
          Dowell Chat
        </h5>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            overflow: "hidden",
            minWidth: "20px",
            paddingRight: "1px",
            marginTop: "-10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",

                padding: "2px",
                borderRadius: "9999px",
                transition: "background-color 0.5s",
              }}
            >
              <button style={{ outline: "none" }} onClick={toggleMode}>
                {darkMode ? (
                  <RiMoonLine
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      color: "#feeeee",
                    }}
                  />
                ) : (
                  <RiSunLine
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      color: "#ffd700",
                    }}
                  />
                )}
              </button>
            </div>

            <button
              onClick={toggleModal}
              style={{
                color: "#ff0000",
                fontWeight: "bold",
                borderRadius: "50%",
                height: "3.7rem",
                width: "2.7rem",
                textAlign: "center",
                padding: "auto",
                transition: "all 0.5s",
                backgroundColor: "transparent", // Ensure the button is visible
                border: "none", // Ensure the button has no border
                cursor: "pointer", // Ensure the button shows pointer cursor
                fontWeight: "bold",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "1.5rem", width: "1.5rem", margin: "auto" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        style={styles.messageContainer}
        ref={containerRef}
        className="border-t-2 "
      >
        {message &&
          message.map((msg, index) => (
            <Message
              sender={msg.sender}
              message={msg.message}
              time={msg.time}
              key={index}
            />
          ))}
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={textMessage}
          onChange={(e) => setTextMessage(e.target.value)}
          style={{
            ...styles.inputField,
            ...inputStyle,
            color: `${darkMode ? "#ffffff" : ""}`,
          }}
          onKeyUp={handleKeyPress}
          placeholder="Type a message"
        />
        <button
          style={{ ...styles.sendButton, ...buttonStyle }}
          onClick={sendTextMessage}
        >
          <IoIosSend style={{ ":hover": { color: "#007bff" } }} size={30} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
