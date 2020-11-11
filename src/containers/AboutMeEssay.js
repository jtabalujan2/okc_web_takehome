import { connect } from 'react-redux';
import { submitField } from '../madlibs';

import AboutMeEssay from '../components/AboutMeEssay';

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  submitField,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMeEssay);
