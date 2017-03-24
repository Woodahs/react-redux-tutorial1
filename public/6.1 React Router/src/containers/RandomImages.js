import {connect} from 'react-redux';
import {getRandomImages} from '../redux/actions/index';
import RandomImages from '../components/RandomImages';

export default connect(
  (state) => ({
    images: state.images
  }),
  {
    onRandomImages: () => getRandomImages
  }
)(RandomImages);
