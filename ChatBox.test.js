import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, it } from "vitest";
import Chat from "./src/components";

const styles = {
  customPositioning: {
    position: "fixed",
    bottom: "1.25rem",
    left: "1.5rem",
    marginLeft: "0.75rem",
    zIndex: "50",
  },
};

const [message, setMessage] = useState([]);

const changeMessage = (msg) => {
  setMessage([...message, msg]);
};

describe("Chat component", () => {
  it("Greeting component renders correctly", () => {
    const component = renderer.create(
      <Chat
        position={styles.customPositioning}
        message={message}
        changeMessage={changeMessage}
      />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(" prop working", () => {
    const component = renderer.create(
      <Chat
        position={styles.customPositioning}
        message={message}
        changeMessage={changeMessage}
      />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
