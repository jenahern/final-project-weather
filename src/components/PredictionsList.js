
import React from "react";
import Prediction from "./Prediction";
import CloudView from './CloudView'

const PredictionList = ({ predictions, setPredictions }) => {


    return (
        <div>
            {predictions.map((prediction) => (
                <Prediction prediction={prediction}
                    key={prediction.id}
                    setPrediction={setPredictions}
                    predictions={predictions}
                />
             
                //map through predictions and return a prediction component for each comment with unique key
            ))}
   <CloudView cloud={predictions.cloud}/>
        </div>
    );
}

export default PredictionList;
