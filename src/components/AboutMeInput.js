import React from 'react';
import PropTypes from 'prop-types';

import { FIELDS } from '../constants';

const AboutMeInput = ({ fieldName }) => (
  <div>
    <p>{FIELDS[fieldName]}</p>
    <input />
  </div>
);

AboutMeInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
};


export default AboutMeInput;

