import React from 'react'
import CloudView from './CloudView'

export default function AllPredictions({ predictions }) {
  return (
    <div>
      { predictions.map(prediction => 
        <div key={prediction.id}>
          <CloudView cloud={prediction.cloud}/>
        </div>
      )}
    </div>
  )
}