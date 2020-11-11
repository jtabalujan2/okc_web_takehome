import React from 'react';
import PropTypes from 'prop-types';

import AboutMeFormList from './AboutMeFormList';
import AboutMeEssay from './AboutMeEssay';

const App = ({ fieldOrder, fieldAnswers }) => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="match-area flex">
      <AboutMeFormList fieldOrder={fieldOrder} />
      <AboutMeEssay fieldAnswers={fieldAnswers} />
    </div>
  </div>
);

App.propTypes = {
  fieldOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  fieldAnswers: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default App;
