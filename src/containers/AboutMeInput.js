import { connect } from 'react-redux';
import { submitField } from '../madlibs';

import AboutMeInput from '../components/AboutMeInput';

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  submitField,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMeInput);
