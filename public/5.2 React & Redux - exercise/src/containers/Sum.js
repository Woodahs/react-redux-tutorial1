import {connect} from 'react-redux';
import {getSum} from '../redux/actions/index';
import Sum from '../components/Sum';

export default connect(
  (state) => ({sum: state.sum}),
  {
    onSum: (a, b) => getSum(a, b)
  }
)(Sum);
