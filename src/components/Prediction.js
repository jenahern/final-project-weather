import React, { useEffect } from "react";
import { weatherApi } from "../rest/api";
import Card from "react-bootstrap/Card";
import  CloudView  from "./CloudView";
// import NewPredictionForm from "./Form3";
// import  PredictionsList  from "./PredictionsList";



const Prediction = ({ prediction, predictions, setPredictions, date  }) => {

    //function to delete a comment from state and update comments in api and from state
    const handleDelete = async () => {
        await weatherApi.delete(prediction.id); //delete comment from api
        //set comments to delete comment from state
        setPredictions(predictions.filter((el) => el.id !== prediction.id));

    };

    return (
        <div>
            <Card body className="date-card text-center my-4">
                {/* <PredictionsList/> */}


            {/* <CloudView {...prediction.cloudValue}/> */}

        {/* <p>{predictions}</p> */}
        {/* {date.toDateString()} */}
        <button onClick={handleDelete}>Delete</button>
        <hr></hr>
        </Card>
    </div>
        
        
    );
};
export default Prediction;