import React, { useState, useEffect, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import styles from "./ChatBoxStyles.jsx";
import Message from "./SubComponents/Message.jsx";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

/**
 * Functional component representing the DowellChatBox component.
 * This component renders a chat box with input field and send button for sending messages.
 * @param {string} props.title - The title displayed in the DowellChatBox component.
 * @param {string} props.ContainerPosition - The positioning style of the DowellChatBox component. It accepts a CSS positioning style.
 * @param {string} props.inputStyle - The styling applied to the input field within the DowellChatBox component. It accepts a string representing CSS styles.
 * @param {string} props.buttonStyle - The styling applied to the send button within the DowellChatBox component. It accepts a string representing CSS styles.
 * @returns {JSX.Element} The rendered DowellChatBox component containing a chat interface.
 */

const ChatBox = ({
  title,
  message,
  changeMessage,
  ContainerPosition,
  inputStyle,
  buttonStyle,
  className,
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
      className={`${className} duration-700 `}
      style={{
        ...styles.dowellContainer,
        ...ContainerPosition,
        backgroundColor: `${darkMode ? "#395177" : "#ffffff"}`,
      }}
    >
      <div style={{ ...styles.headerContainer }}>
        <h5 style={styles.chatTitle} className={`${darkMode && "text-white"}`}>
          Dowell Chat
        </h5>
        <div className="flex justify-end items-end overflow-hidden h-10 min-w-20  pr-1 ">
          <div className="flex items-center gap-x-2">
            <div className="flex items-center hover:bg-slate-500 p-2 rounded-full duration-500">
              <button className="focus:outline-none" onClick={toggleMode}>
                {darkMode ? (
                  <RiMoonLine className="h-6 w-6 text-gray-300" />
                ) : (
                  <RiSunLine className="h-6 w-6 text-yellow-400" />
                )}
              </button>
            </div>

            <button
              onClick={toggleModal}
              className="text-red-600 font-extrabold rounded-full h-10 w-10 text-center px-auto  transition-all duration-500 hover:bg-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto"
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
          style={{ ...styles.inputField, ...inputStyle }}
          onKeyUp={handleKeyPress}
          placeholder="Type a message"
          className={`${darkMode && "text-[#ffffff]"}`}
        />
        <button
          style={{ ...styles.sendButton, ...buttonStyle }}
          onClick={sendTextMessage}
        >
          <IoIosSend className="hover:text-blue-600 duration-500" size={30} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
