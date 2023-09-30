import React from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import { FaPause, FaPlay, FaUndo, FaArrowRight } from "react-icons/fa";
// import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import "../all_css/answercss.css";

// import Button from '@mui/material/Button';
// or
import { Button } from "@mui/material";

const App = (props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  function HandleClick() {
    console.log("current transcript is: ", transcript);
    props.onChecked(transcript);
    resetTranscript();
  }

  return (
    <div>
      {/* <p>Microphone: {listening ? "On" : "Off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <button onClick={HandleClick}>Next</button>

      <p>{transcript}</p> */}

      <p className="microphone-container">
        Microphone:{" "}
        {listening ? (
          <button
            onClick={SpeechRecognition.stopListening}
            title="Stop Recording"
            className="microphone-button stop"
          >
            <FaPause className="microphone-icon" />
          </button>
        ) : (
          <button
            onClick={SpeechRecognition.startListening}
            title="Start Recording"
            className="microphone-button start"
          >
            <FaPlay className="microphone-icon" />
          </button>
        )}
        <button
          onClick={resetTranscript}
          className="reset-button"
          title="Reset Transcript"
        >
          <FaUndo />
        </button>
        <button
          onClick={HandleClick}
          className="next-button"
          title="Next Question"
        >
          <FaArrowRight />
        </button>
      </p>

      {/* <button onClick={resetTranscript}>Reset</button>
      <button onClick={HandleClick}>Next</button> */}

      {/* <button
        onClick={resetTranscript}
        className="reset-button"
        title="Reset Transcript"
      >
        <FaUndo />
      </button>
      <button
        onClick={HandleClick}
        className="next-button"
        title="Next Question"
      >
        <FaArrowRight />
      </button> */}

      <p>{transcript}</p>
    </div>
  );
};
export default App;

// pause button resume button restart button save button
