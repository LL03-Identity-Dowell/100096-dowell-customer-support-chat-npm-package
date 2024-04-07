import styles from "./MessageStyles"; // Style the component in a separate CSS file

const Message = ({ sender, message, time }) => {
  return (
    <>
      <div style={sender === "user" ? styles.userMessage : styles.botMessage}>
        {sender != "user" && (
          <div
            style={{
              ...styles.botMessageBefore,
              ...styles.botMessageBeforeLeft,
            }}
          ></div>
        )}
        <div style={sender === "user" ? styles.headerUser : styles.headerBot}>
          <div style={styles.messageSender}>{sender}</div>
          <div style={styles.messageTime}>{time}</div>
        </div>
        <div style={styles.messageText}>{message}</div>

        {sender === "user" && (
          <div
            style={{
              ...styles.userMessageBeforeAfter,
              ...styles.userMessageAfter,
            }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Message;
