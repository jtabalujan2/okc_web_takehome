import { connect } from 'react-redux';
import { submitReset, editEssay } from '../madlibs'

import AboutMeEdit from '../components/AboutMeEdit';

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps =  {
  submitReset,
  editEssay
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMeEdit);
