import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Description = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
        <DatePicker
          selected={startDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      </div>
    </div>
  );
};

export default Description;
