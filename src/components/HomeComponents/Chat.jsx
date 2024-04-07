import { useState, useEffect } from "react";
import ChatBox from "../ChatComponents/ChatBox.jsx";
import styles from "./ChatStyles.jsx";

/**
 * Functional component representing the DowellChat component.
 * This component renders a button that toggles a modal containing a DowellChatBox component.
 * @param {string} props.position - The position of the DowellChat component within the layout. It accepts a CSS class name or a combination of class names for positioning.
 * @param {string} props.title - The title displayed in the DowellChatBox component within the modal.
 * @param {string} props.ContainerPosition - The positioning style of the DowellChatBox component within the modal. It accepts a CSS positioning style.
 * @param {string} props.inputStyle - The styling applied to the input field within the DowellChatBox component. It accepts a string representing CSS styles.
 * @param {string} props.buttonStyle - The styling applied to the button within the DowellChatBox component. It accepts a string representing CSS styles.
 * @returns {JSX.Element} The rendered DowellChat component containing a button to toggle the modal.
 */

const Chat = ({
  position,
  message,
  changeMessage,
  title,
  ContainerPosition,
  inputStyle,
  buttonStyle,
  className,
}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [rightPosition, setRightPosition] = useState("15px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setRightPosition("3rem"); // On large screens and up
      } else if (window.innerWidth >= 768) {
        setRightPosition("2.5rem"); // On medium screens and up
      } else {
        setRightPosition("2rem"); // On small screens
      }
    };

    handleResize(); // Initial call to set the correct right position
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ ...position }} className={className}>
      {modal ? (
        <ChatBox
          title={title ?? "Dowell Customer Support"}
          message={message}
          changeMessage={changeMessage}
          ContainerPosition={
            ContainerPosition ?? {
              ...styles.ContainerPosition,
              left: rightPosition,
            }
          }
          inputStyle={inputStyle ?? styles.inputStyle}
          buttonStyle={buttonStyle ?? styles.buttonStyle}
          toggleModal={toggleModal}
        />
      ) : (
        <button
          style={{
            ...styles.dowellChatButton,
            ...(modal
              ? styles.dowellChatButtonModal
              : styles.dowellChatButtonDefault),
          }}
          onClick={toggleModal}
        >
          Chat
        </button>
      )}
    </div>
  );
};

export default Chat;
