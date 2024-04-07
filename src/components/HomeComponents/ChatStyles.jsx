const styles = {
  dowellChatButton: {
    text: "center",
    height: "2rem",
    width: "8rem",
    borderRadius: "0.5rem",
    fontWeight: "bold",
  },
  dowellChatButtonModal: {
    backgroundColor: "#cce6ff",
  },
  dowellChatButtonDefault: { backgroundColor: "#007af9" },

  ContainerPosition: {
    position: "fixed",
    bottom: "6rem",
  },
  inputStyle: {
    borderRadius: "0.375rem", // rounded-lg
    height: "2.5rem", // h-10
    appearance: "none",
    backgroundColor: "transparent", // bg-transparent
    border: "1px solid", // border
    borderColor: "currentColor", // text-gray-700
    paddingLeft: "0.25rem", // px-1
    paddingRight: "0.25rem", // px-1
    outline: "none", // focus:outline-none
    "&:focus": {
      outline: "none",
    },
  },
  buttonStyle: {
    borderRadius: "0.5rem", // rounded-lg
    borderColor: "white", // border-white
    backgroundColor: "#90cdf4", // bg-blue-300
    padding: "0rem .5rem", // py-2 px-4
    height: "2.5rem", // h-10
  },
};

export default styles;
