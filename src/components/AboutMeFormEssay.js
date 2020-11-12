import React from 'react';
import PropTypes from 'prop-types';


const AboutMeFormEssay = ({ fieldOrder, fieldAnswers, isAllFieldsAnswered, submitEdit }) => {
  const handleEditClick = (e) => {
    submitEdit();
  }

  const genereateEssay = () => {
    const result = fieldOrder.map(fieldName => {
      if(fieldAnswers[fieldName]) {
        const answer = fieldAnswers[fieldName].answer
        const sentence = fieldAnswers[fieldName].sentence

        return sentence.replace('$answer', `<b>${answer}</b>`) + " "
      }
      return ""
    })
  
    return result.join("")
  }

  const html = { __html: genereateEssay() }

  return (
  <div className="essay">
    <h2>Your essay text</h2>
    <p dangerouslySetInnerHTML={html}></p>
    {isAllFieldsAnswered && 
      <button onClick={handleEditClick}>Edit</button>
    }
  </div>
)};

AboutMeFormEssay.propTypes = {
  fieldOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  fieldAnswers: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  isAllFieldsAnswered: PropTypes.bool.isRequired,
  submitEdit: PropTypes.func.isRequired,
};

export default AboutMeFormEssay;
