import React, { useState } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const Description = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="w-full flex">
      <div className="w-3/5 p-4 bg-white bg-opacity-50 backdrop-blur-md rounded-lg">
        <p className="text-black text-xl">
          This industrial loft offers a spacious and well-lit living area with a modern design. 
          Located in the heart of Williamsburg, it features high ceilings, large windows, and 
          an open floor plan. Perfect for those who appreciate a blend of contemporary style 
          and urban convenience.
        </p>
      </div>
      <div className="w-2/5 p-4">
        <DateRangePicker
          startDate={startDate}
          startDateId="your_unique_start_date_id"
          endDate={endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={focusedInput => setFocusedInput(focusedInput)}
          displayFormat="MMM D, YYYY"
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    </div>
  );
};

export default Description;
