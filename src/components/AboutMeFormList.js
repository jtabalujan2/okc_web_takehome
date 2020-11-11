import React from 'react';
import PropTypes from 'prop-types';

import AboutMeInput from './AboutMeInput';
import { FIELD_NAMES } from '../constants';

const AboutMeFormList = ({ fieldOrder }) => (
  <div className=" inline questions">
    <h2>About Me</h2>
    {fieldOrder.map((field) => <AboutMeInput fieldName={field} key={FIELD_NAMES[field]} />)}
  </div>
);

AboutMeFormList.propTypes = {
  fieldOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default AboutMeFormList;

