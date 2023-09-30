import React, { useState, useRef } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Answer from "./Answer";
import "../all_css/questioncss.css";
import girlImage from "../assets/questionimage.png";
import { FaVolumeUp } from "react-icons/fa";
var answers = [];
import { Button } from "@mui/material";

function Questionnaire() {
  const { speak } = useSpeechSynthesis();

  const [questions, setQuestions] = useState([
    { id: 1, text: "Are you self-employed?", answer: "" },
    { id: 2, text: "Do you work remotely?", answer: "" },
    {
      id: 3,
      text: "Have you had a mental health disorder in the past?",
      answer: ""
    },
    {
      id: 4,
      text:
        "Do you believe your productivity is ever affected by a mental health issue?",
      answer: ""
    },
    {
      id: 5,
      text: "Do you have a family history of mental illness?",
      answer: ""
    },
    {
      id: 6,
      text: "do you feel comfortable in your working environment?",
      answer: ""
    },
    {
      id: 7,
      text: "do  you feel comfortable working  with your direct supervisor(s)",
      answer: ""
    },

    {
      id: 8,
      text:
        "Do you feel that your organisation takes mental health as seriously as physical",
      answer: ""
    },

    {
      id: 9,
      text:
        "Have you observed or experienced an unsupportive or badly handled response to an issue in your current",
      answer: ""
    },

    { id: 10, text: "are you stressed about your career?", answer: "" },
    {
      id: 11,
      text:
        "Have you ever sought treatment for a mental health issue from a mental health professional?",
      answer: ""
    },

    {
      id: 12,
      text:
        "How willing would you be to share with friends and family about your work stress?",
      answer: ""
    },

    {
      id: 13,
      text: "Do you currently have a mental health disorder?",
      answer: ""
    },
    {
      id: 14,
      text:
        "Have you observed or experienced an unsupportive or badly handled response to an issue in your current workplace?",
      answer: ""
    },

    {
      id: 15,
      text:
        "Did you feel that your previous employers took mental health as seriously as physical health?",
      answer: ""
    },

    {
      id: 16,
      text: "Have your previous employers provided mental health benefits?",
      answer: ""
    }

  ]);

  const textareaRef = useRef(null);
  const submitButtonRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitButtonRef.current.click();
    }
  };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [answer, setAnswer] = useState([""]);
  const [currAnswer, setCurrAnswer] = useState("");
  const [sendData, setSendData] = useState(false);
  const [dataToShow, setDataToShow] = useState("for now");

  const handleSubmit = async (event) => {
    setSendData(true);
    if (event) {
      event.preventDefault();
    }
    console.log("check data");

    // const response = await fetch("http://localhost:5000/api/submit", {
    const response = await fetch("http://127.0.0.1:5000/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(answers)
    });
    const jsonData = await response.json();
    console.log("processed data is:", jsonData.processed_data);

    const new_data = JSON.stringify(jsonData);
    setDataToShow(new_data);
  };

  function addAnswer(msg) {
    const gotData = JSON.stringify(msg);
    setCurrAnswer(gotData);
    answers.push(gotData);
    console.log("got data in add answer is ", gotData);
    setAnswer((prevAnswers) => [...prevAnswers, gotData]);

    console.log("answer in question.jsx is: ", answers);
    setCurrAnswer("");
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      handleSubmit();
    }
  }

  const handleInput = () => {
    const inputValue = document.querySelector(".textbox").value;
    console.log("Submitted value:", inputValue);

    setCurrAnswer(inputValue);
    answers.push(inputValue);
    console.log("got data in add answer is ", inputValue);
    setAnswer((prevAnswers) => [...prevAnswers, inputValue]);

    console.log("answer in question.jsx is: ", answers);
    setCurrAnswer("");
    document.querySelector(".textbox").value = "";
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      handleSubmit();
    }
  };

  return (
    <div>
      {sendData === false ? (
        <div className="questionparent">
          {questions.map((question, index) => {
            if (index === currentQuestionIndex) {
              return (
                <div key={question.id} className="questionbox">
                  {/* <p>{answer}</p> */}
                  <Answer onChecked={addAnswer} />

                  <img src={girlImage} alt="My Image" />

                  <p className="questiontext">
                    {question.text}{" "}
                    <button
                      title="Speak"
                      onClick={() => speak({ text: question.text })}
                      className="speakButton"
                    >
                      <FaVolumeUp className="speakIcon" />
                    </button>
                  </p>
                  {/* <textarea
                    className="textbox"
                    placeholder="Write your thoughts about the question..."
                  /> */}

                  <textarea
                    ref={textareaRef}
                    className="textbox"
                    placeholder="Write your thoughts about the question..."
                    onKeyPress={handleKeyPress}
                  />
                  <button ref={submitButtonRef} className="submitButton" onClick={handleInput}>
                    Submit
                  </button>

                  {/* {currentQuestionIndex === questions.length - 1 && (
                    <Button variant="contained" onClick={handleSubmit}>
                      Save Data
                    </Button>
                  )} */}
                </div>
              );
            }
            return null;
          })}
        </div>
      ) : (
        <div className="questionparent">
          <div className="questionbox">
            <p>{dataToShow}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Questionnaire;
