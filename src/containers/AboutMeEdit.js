import { connect } from 'react-redux';

import AboutMeEdit from '../components/AboutMeEdit';

function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps)(AboutMeEdit);
