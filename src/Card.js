import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ student }) => {
  return (
    <div className="card">
      <img src={student.image} alt={student.name} />
      <div className="card-details">
        
        <h2>{student.name}</h2>
        <p>{student.course}</p>
        <p>ID: {student.id}</p>

        <button Style={"background: #0d6efd; border-radius:5px;"}>
        <Link Style={" text-decoration:none; color:white;"} to={`/student/${student.id}?name=${encodeURIComponent(student.name)}&course=${encodeURIComponent(student.course)}`}>Details</Link>
        
        </button>
      </div>
    </div>
  );
};

export default Card;
