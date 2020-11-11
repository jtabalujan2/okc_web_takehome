import React from 'react';
import PropTypes from 'prop-types';

import { FIELDS } from '../constants';

const AboutMeInput = ({ fieldName, fieldOrder, fieldAnswers, submitField,  }) => {
  const handleSubmit = (e) => {

    const payload = {
      id: fieldName,
      answer: e.target.value,
    }

    //checks if the state is different; if it is, then submit it
    if(fieldAnswers[fieldName] !== e.target.value && e.target.value !== "") {
      submitField(payload)
    }
  }

  return (
  <div>
    <p>{FIELDS[fieldName]}</p>
    <input onBlur={handleSubmit} />
  </div>
)};

AboutMeInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldAnswers: PropTypes.object.isRequired,
  submitField: PropTypes.func.isRequired,
};


export default AboutMeInput;

