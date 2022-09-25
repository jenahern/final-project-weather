import React from 'react'
import { useParams } from 'react-router-dom'
import CloudView from './CloudView';

export default function PredictionsInCategory({ predictionList }) {

    const { category } = useParams()

    let filteredPredictions = null;
    if (category === "sunny") {
        filteredPredictions = predictionList.filter(prediction => prediction.cloud < 3)
    }
    else {
        filteredPredictions = predictionList.filter(prediction => prediction.cloud > 3)
    }

    // You could find instead of filter to show one specific entry

    return (
        <div>
            {filteredPredictions.map(prediction =>
                <div key={prediction.id}>
                    <CloudView cloud={prediction.cloud} />
                </div>
            )}
        </div>
    )
}
