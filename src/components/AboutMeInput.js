import React from 'react';
import PropTypes from 'prop-types';

import { FIELD_NAMES, COPY } from '../constants';

const AboutMeInput = ({ fieldName }) => (
  <div className="">
    <p>{COPY[FIELD_NAMES[fieldName]]}</p>
    <input className="" />
  </div>
);

AboutMeInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
};


export default AboutMeInput;

