import React from 'react';
import PropTypes from 'prop-types';


const AboutMeEssay = ({ fieldAnswers, isAllFieldsAnswered }) => {
  return (
  <div className="essay">
    <h2>Your essay text</h2>
    <pre>{JSON.stringify(fieldAnswers)}</pre>
    <pre>{isAllFieldsAnswered}</pre>
    {isAllFieldsAnswered && 
      <button>Edit</button>
    }
  </div>
)};

AboutMeEssay.propTypes = {
  fieldAnswers: PropTypes.objectOf(PropTypes.string).isRequired,
  isAllFieldsAnswered: PropTypes.bool.isRequired
};

export default AboutMeEssay;
