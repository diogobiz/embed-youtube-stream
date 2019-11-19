import React from "react";
import "./App.css";

const styleWrapper = {
  position: "relative",
  paddingBottom: "56.25%",
  paddingTop: 30,
  height: 0,
  overflow: "hidden"
};

const styleIframe = {
  borderRadius: 4,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: 0
};

function App() {
  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        justifyContent: "space-between",
        width: 1000,
        margin: "0 auto"
      }}
    >
      <div style={{ ...styleWrapper, width: "65%" }}>
        <iframe
          style={styleIframe}
          src="https://www.youtube.com/embed/live_stream?channel=UCuKwxu1nZp3ysEixnMQpPjA"
          allowFullScreen
          title="Stream"
        ></iframe>
      </div>
      <div style={{ ...styleWrapper, width: "33%" }}>
        <iframe
          style={styleIframe}
          src="https://www.youtube.com/live_chat?v=2OUSGMAhSpg&embed_domain=localhost"
          allowFullScreen
          title="Chat"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
