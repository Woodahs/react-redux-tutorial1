import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRandomImages} from '../redux/actions/index';

class RandomImages extends Component {
  render() {
    function ImageList(props) {
      return (
        <div>
          {props.images.map((image) => (
            <img src={image.link} style={{height: "200px"}} key={image.id} alt={image.id}/>)
          )}
        </div>
      )
    }

    const {onRandomImages, images: {loading, data}} = this.props;
    return (
      <div>
        <button onClick={onRandomImages}>Random Images ></button>
        <br/>
        CountStatus: <span style={{color: "blue"}}>{loading}</span>
        <ImageList images={data}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRandomImages: () => {
      dispatch(getRandomImages);
    }
  }
};

const RandomImagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomImages);


export default RandomImagesContainer;
