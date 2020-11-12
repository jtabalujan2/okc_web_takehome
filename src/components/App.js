import React from 'react';

import AboutMeEdit from "./AboutMeEdit"
import AboutMeForm from "./AboutMeForm"

const okcLogo = 'https://cdn.okccdn.com/media/img/hub/mediakit/okcupid_darkbg_2019.png';

const App = ( ) => (
  <div className="flex flex-col justify-center items-center min-h-screen">
    <img src={okcLogo} alt="OkCupid Logo" />
    <div>
      <AboutMeForm />
      <AboutMeEdit />
    </div>
  </div>
);


export default App;
