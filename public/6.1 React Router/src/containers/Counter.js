import {connect} from 'react-redux';
import {decrease} from '../redux/actions/index';
import Counter from '../components/Counter';


export default connect(
  (state) => ({
    count: state.count
  }),
  {
    onDecrement: decrease
  }
)(Counter);
