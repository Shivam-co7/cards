import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the JSON data and update the state
    fetch('/studentsData.json')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="card-list">
      {students.map((student) => (
        <Card
          key     = {student.id}
          student = {student}
        />
      ))}
    </div>
  );
};

export default CardList;
