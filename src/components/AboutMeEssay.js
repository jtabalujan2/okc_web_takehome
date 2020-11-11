import React from 'react';
import PropTypes from 'prop-types';


const AboutMeEssay = ({ fieldAnswers }) => (
  <div className="essay">
    <h2>Your essay text</h2>
    <pre>{JSON.stringify(fieldAnswers)}</pre>
  </div>
);

AboutMeEssay.propTypes = {
  fieldAnswers: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AboutMeEssay;
