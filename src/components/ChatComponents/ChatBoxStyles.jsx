const styles = {
  dowellContainer: {
    position: "fixed",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
    paddingRight: "5px",
    gap: "10px",
    borderRadius: "12px",
    maxHeight: "75vh",
    boxShadow: "rgb(202, 197, 197) 0px 0px 10px",
    width: "350px", // Default width
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  chatTitle: {
    fontSize: "1.5rem",
    textAlign: "left",
    fontWeight: "bold",
  },
  messageContainer: {
    width: "100%",
    maxHeight: "100%", // Adjust as needed
    overflowX: "hidden",
    paddingBlock: "20px",
    paddingInline: "5px",
    borderRadius: "5px",
    paddingRight: "15px",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
  },
  message: {
    backgroundColor: "#f4f4f4",
    padding: "5px",
    borderRadius: "5px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    borderRadius: "5px",
    width: "100%",
  },
  inputField: {
    width: "100%",
    padding: "2px",
    paddingLeft: "5px",
    border: "1px solid #007bff",
    borderRadius: "10px",
  },
  sendButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "5px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default styles;
