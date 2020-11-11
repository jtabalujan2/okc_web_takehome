import React from 'react';
import PropTypes from 'prop-types';

import { FIELDS } from '../constants';

const AboutMeInput = ({ fieldName, submitField }) => {
  const handleSubmit = (e) => {
    const payload = {
      id: fieldName,
      answer: e.target.value
    }

    submitField(payload)

  }

  return (
  <div>
    <p>{FIELDS[fieldName]}</p>
    <input onBlur={handleSubmit} />
  </div>
)};

AboutMeInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  submitField: PropTypes.func.isRequired,
};


export default AboutMeInput;

