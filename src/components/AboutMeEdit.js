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
  <div className="flex flex-col justify-center items-center edit-field-container">
   <div className="edit-field"> 
      <h2>Your essay text</h2>
      <textarea value={essayText} onChange={handleEdit}></textarea>
      <button onClick={handleReset}>Start Over</button>
   </div>
  </div>
)};


export default AboutMeEdit;
