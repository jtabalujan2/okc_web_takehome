import React from 'react';
import PropTypes from 'prop-types';

import AboutMeFormList from './AboutMeFormList';
import AboutMeEssay from '../containers/AboutMeEssay';

const okcLogo = 'https://cdn.okccdn.com/media/img/hub/mediakit/okcupid_darkbg_2019.png';

const App = ({ fieldOrder }) => (
  <div className="flex flex-col justify-center items-center min-h-screen">
    <img src={okcLogo} alt="OkCupid Logo" />
    <div className="match-area flex">
      <AboutMeFormList fieldOrder={fieldOrder} />
      <AboutMeEssay />
    </div>
  </div>
);

App.propTypes = {
  fieldOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
