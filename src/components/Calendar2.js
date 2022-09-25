import { useState } from 'react';
import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';
// import AllPredictions from './AllPredictions'


function Calendar2() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='m-1'>
      <h1 className='text-center'>Classroom Calendar</h1>
      <div className='calendar text-center'>
        <Calendar onChange={setDate} value={date} />
      </div>
   
      <Card body className='date-card text-center mt-4'>
        <span className='bold'>Today is </span>{' '}
        {date.toDateString()}

        {console.log(date.toDateString())}
     
        </Card>
    </div>
  );    
}

export default Calendar2;

// The initial value passed to the calendar is the present date. When a user clicks the calendar, its value will be set to the user’s selection. 
// date is currently printing below the calendar - 
// TODO get the date to print to a new div with the weather selection