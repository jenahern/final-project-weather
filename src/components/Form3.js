import React, { useState } from "react";
import CloudSelect from "./CloudSelect";
import Card from "react-bootstrap/Card";
import { weatherApi } from "../rest/api";

export default function NewPredictionForm({ newPrediction,setNewPrediction, predictions, setPredictions}) {
  const [cloudValue, setCloudValue] = useState(1);
  const [commentValue, setCommentValue] = useState("");

  const handleCommentChange = (event) => setCommentValue(event.target.value);

  const handleCloudChange = (newCloud) => setCloudValue(newCloud);

 //method to handle submit while posting to api and updating state
 const handleSubmit = async (e) => {
    e.preventDefault();
    weatherApi.post(newPrediction);
    setPredictions([...predictions]);
    setNewPrediction({ cloud: (0), comment: "" });
    setCloudValue(0);
    setCommentValue("");
};


  return (
    <div>
      <Card body className="date-card text-center mt-4">
        <h4>Today's Weather</h4>
        <form>
          <label className="m-2">What does Today's Weather look like?</label>
          <CloudSelect value={cloudValue} onChange={handleCloudChange} />
          <br></br>
          <label className="m-2">What does Today's Weather feel like?</label>

          <input
            type="text"
            placeholder="Today it is warm."
            value={commentValue}
            onChange={handleCommentChange}
          />
          <br></br>
          <button className="m-2 btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          {console.log(cloudValue, commentValue)}
        </form>
      </Card>
    </div>
  );
}
