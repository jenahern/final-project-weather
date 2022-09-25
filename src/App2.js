import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { weatherApi} from "./rest/api";
// import AllPredictions from "./components/AllPredictions";
import PredictionsInCategory from "./components/PredictionsInCategory";
import NewPredictionForm from "./components/Form3";
import Prediction from "./components/Prediction";
import PredictionsList from "./components/PredictionsList";
import Sidebar from "./components/Sidebar";
import Calendar2 from "./components/Calendar2";
import 'react-calendar/dist/Calendar.css';
import './App.css';

export default function App() {
      //hook to hold commments

  const [predictions, setPredictions] = useState([]);
  const [newPrediction, setNewPrediction] = useState({ cloud: (0), comment: "" });

  const navigate = useNavigate();

  //useEffect - I need this to run when the page loads to keep comments from the api
  useEffect(() => {
    const getPredictions = async () => { //async function to get comments from api
      const predictionsFromServer = await weatherApi.get(); //get comments from api and store in variable
      setPredictions(predictionsFromServer); //update comments state with comments from api
      // const data = await weatherApi.post(newPrediction);
      console.log(predictionsFromServer);
    };
    getPredictions(); //call function to get comments from api
  
  }, []); //empty array as second argument to prevent infinite loop

  
const addNewPrediction = (newPrediction) => {
newPrediction = {...predictions, cloud: predictions.cloud, comment: predictions.comment}
  setNewPrediction([...predictions, newPrediction]);
  weatherApi.post(newPrediction);
      setPredictions([...predictions]);
    setNewPrediction({ cloud: (0), comment: "" });

  navigate("/");
 }

  // const newPrediction () => {
  //   const predictions = {
  //     ...predictions
  //   }; 
  //   // setNewPrediction({ ...newPrediction, [e.target.cloud]: e.target.value });

  //  };

  return (
    <div className="container-md m-2 border shadow">
      <div className="row-md">
        <div className="col-md">
          <Calendar2 />
          {/* <NewPredictionForm /> */}
        </div>

        <div className="predictions/new">
          <Routes>
            <Route
              path="/"
              element={<NewPredictionForm onSubmit={addNewPrediction}  />}
            />
            <Route
              path="predictions"
              element={<PredictionsList predictions={predictions}  />}
            />
            <Route
              path="predictions/:category"
              element={
                <PredictionsInCategory  />
              }
            />
          </Routes>
          <div className="mt-2">
            <Prediction/>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
