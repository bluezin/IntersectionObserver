import "./App.css";
import { useRef, useEffect } from "react";
import video from "./video/bts.webm";

function App() {
  const textRef = useRef();

  function callback(entries) {
    if (entries[0].isIntersecting) {
      textRef.current.muted = true;
      textRef.current.play();
    } else {
      textRef.current.pause();
    }
  }
  const options = {
    // root: viwport
    // rootMargin :""
    threshold: 0.1,
  };
  const observer = new IntersectionObserver(callback, options);

  function handleMuted() {
    textRef.current.muted = false;
  }

  function handleOnMuted() {
    textRef.current.muted = true;
  }

  useEffect(() => {
    observer.observe(textRef.current);
  }, []);
  //
  return (
    <div className="App">
      <h1>Happy hacking!!</h1>
      <div className="div-box give">1</div>
      <div className="div-box give">2</div>
      <div className="div-box give">3</div>
      <div className="div-box give">4</div>
      <div className="div-box give" onClick={handleMuted}>
        give me click
      </div>

      <video src={video} ref={textRef}></video>
      <div className="div-box give" onClick={handleOnMuted}>
        turn me off
      </div>
      <div className="div-box give">7</div>
      <div className="div-box give">8</div>
      <div className="div-box give">9</div>
      <div className="div-box give">10</div>
    </div>
  );
}

export default App;
