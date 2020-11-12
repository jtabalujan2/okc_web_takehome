import { connect } from 'react-redux';
import { submitEdit } from '../madlibs';

import AboutMeFormEssay from '../components/AboutMeFormEssay';

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  submitEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMeFormEssay);
