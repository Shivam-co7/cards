import React from 'react';

const SeparateDetails = ({ location }) => {
    const {student} = this.state;
    // if(!student){
    //     return(
    //         <center> <div>No Student Data to Display!</div> </center>
    //     )
    // }

  return (
    <div>
      <h2>{student.name}</h2>
      <p>ID: {student.id}</p>
      <p>Course: {student.course}</p>
    </div>
  );
};

export default SeparateDetails;
