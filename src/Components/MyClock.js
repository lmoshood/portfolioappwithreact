import React, { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <h1>Welcome to React js full course</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;
