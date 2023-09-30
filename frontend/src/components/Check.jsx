import { useState, useEffect } from "react";
import { Button } from "@mui/material";

function GetPost(props) {
  const [formData, setFormData] = useState({
    question: "blah blah",
    answer: "ans ans"
  });

  // const [processedData, setProcessedData] = useState(null);

  const handleSubmit = async (event) => {
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
      body: JSON.stringify(formData)
    });
    const jsonData = await response.json();
    console.log("processed data is:", jsonData.processed_data);

    const new_data = JSON.stringify(jsonData);
    // setProcessedData(new_data);

    props.onChecked(new_data);
  };

  function SetData(all_questions, all_answers) {
    console.log(all_questions);
    console.log(all_answers);
    setFormData({
      question: all_questions[0],
      answer: all_answers[0]
    });

    handleSubmit();
  }

  function HandleSaveData() {
    const all_questions = props.all_questions;
    const all_answers = props.all_answers;
    const last_answer = props.last_answer;

    all_answers.push(last_answer);
    console.log("all questions printed here", all_questions);
    console.log("all answers printed here: ", all_answers);
    console.log("last answer printed here: ", last_answer);
    // console.log("Save data function called", all_questions);
    // console.log("Save data function called", all_answers);

    // SetData(all_questions, all_answers);
  }

  return (
    <div>
      {/* {processedData === null ? (
        <Button variant="contained" onClick={HandleSaveData}>
          Save Data
        </Button>
      ) : (
        <p>Processed data: {processedData}</p>
      )} */}

      <Button variant="contained" onClick={HandleSaveData}>
        Save Data
      </Button>
    </div>
  );
}

export default GetPost;
