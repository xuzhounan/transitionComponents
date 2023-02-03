import React, { useState } from "react";
import { Fade, Slide, Alert, Zoom } from "./transitionComponents/index";
import "./styles.less";

function App() {
  const [visible, setVisible] = useState(false);
  const [slideVisible, setSlideVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [zoomVisible, setZoomVisible] = useState(false);

  return (
    <div className="pages-demo-css-transition">
      <Fade visible={visible}>
        <div className="show-block"></div>
      </Fade>

      <Slide visible={slideVisible} direction="up">
        <div className="show-block"></div>
      </Slide>

      <Alert visible={alertVisible}>
        <div className="show-block"></div>
      </Alert>

      <Zoom visible={zoomVisible}>
        <div className="show-block"></div>
      </Zoom>

      <div
        className="btn"
        onClick={() => {
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
          }, 400);
        }}
      >
        Fade
      </div>

      <div
        className="btn"
        onClick={() => {
          setSlideVisible(true);
          setTimeout(() => {
            setSlideVisible(false);
          }, 300);
        }}
      >
        slide
      </div>

      <div
        className="btn"
        onClick={() => {
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 300);
        }}
      >
        alert
      </div>

      <div
        className="btn"
        onClick={() => {
          setZoomVisible(true);
          setTimeout(() => {
            setZoomVisible(false);
          }, 300);
        }}
      >
        zoom
      </div>
    </div>
  );
}

export default App;
