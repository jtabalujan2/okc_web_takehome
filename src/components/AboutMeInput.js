import React from 'react';
import PropTypes from 'prop-types';

import { FIELD_NAMES, COPY } from '../constants';

const AboutMeInput = ({ fieldName }) => (
  <div>
    <p>{COPY[FIELD_NAMES[fieldName]]}</p>
    <input />
  </div>
);

AboutMeInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
};


export default AboutMeInput;

