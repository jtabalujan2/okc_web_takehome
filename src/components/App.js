import React from 'react';
import PropTypes from 'prop-types';

import AboutMeEdit from "./AboutMeEdit"
import AboutMeForm from "./AboutMeForm"

const okcLogo = 'https://cdn.okccdn.com/media/img/hub/mediakit/okcupid_darkbg_2019.png';

const App = ({ isEdit }) => {

  const Form = () => {
    if(isEdit) {
      return <AboutMeEdit />
    }
    else {
      return <AboutMeForm />
    }
  }

  return (
  <div className="flex flex-col justify-center items-center min-h-screen">
    <img src={okcLogo} alt="OkCupid Logo" />
    <div className="match-area">
      <Form />
    </div>
  </div>
)};

App.propTypes = {
  isEdit: PropTypes.bool.isRequired
}


export default App;
