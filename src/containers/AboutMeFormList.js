import { connect } from 'react-redux';

import AboutMeFormList from '../components/AboutMeFormList';

function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps)(AboutMeFormList);
