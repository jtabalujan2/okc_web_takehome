import React from 'react';


const AboutMeEdit = ({ essayText, submitReset, editEssay }) => {
   const handleReset = (e) => {
      e.preventDefault();
      submitReset();
   }

   const handleEdit = (e) => {
      e.preventDefault();
      editEssay({essay: e.target.value})
   }

   return (
  <div className="edit-field flex">
      <input value={essayText} onChange={handleEdit}></input>
      <button onClick={handleReset}>Start Over</button>
  </div>
)};


export default AboutMeEdit;
