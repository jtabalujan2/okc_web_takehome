import React from 'react';

import AboutMeFormList from '../containers/AboutMeFormList';
import AboutMeFormEssay from '../containers/AboutMeFormEssay';


const AboutMeForm = () => (
  <div className="flex">
      <AboutMeFormList/>
      <AboutMeFormEssay />
  </div>
);


export default AboutMeForm;
