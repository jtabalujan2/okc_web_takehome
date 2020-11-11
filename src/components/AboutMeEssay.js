import React from 'react';
import PropTypes from 'prop-types';


const AboutMeEssay = ({ fieldOrder, fieldAnswers, isAllFieldsAnswered }) => {
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
      <button>Edit</button>
    }
  </div>
)};

AboutMeEssay.propTypes = {
  fieldAnswers: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  isAllFieldsAnswered: PropTypes.bool.isRequired
};

export default AboutMeEssay;
