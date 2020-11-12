import React from 'react';
import PropTypes from 'prop-types';

import AboutMeEdit from "../containers/AboutMeEdit"
import AboutMeForm from "./AboutMeForm"

const okcLogo = 'https://cdn.okccdn.com/media/img/hub/mediakit/okcupid_darkbg_2019.png';

const App = ({ isEdit }) => {

  return (
  <div className="flex flex-col justify-center items-center min-h-screen">
    <img src={okcLogo} alt="OkCupid Logo" />
    <div className="match-area">
      {isEdit ? <AboutMeEdit /> : <AboutMeForm />}
    </div>
  </div>
)};

App.propTypes = {
  isEdit: PropTypes.bool.isRequired
}


export default App;
