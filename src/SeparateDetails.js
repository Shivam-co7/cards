import React from 'react';
import { useLocation } from 'react-router-dom';

const SeparateDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const course = queryParams.get('course');

  return (
      <div>
    <center>
      <h2>{name}</h2>
      <p>Course: {course}</p>
    </center>
    </div>
  );
};

export default SeparateDetails;
