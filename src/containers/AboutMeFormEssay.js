import { connect } from 'react-redux';
import { submitField } from '../madlibs';

import AboutMeFormEssay from '../components/AboutMeFormEssay';

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  submitField,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMeFormEssay);
