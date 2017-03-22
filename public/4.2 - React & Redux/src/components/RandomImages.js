import React, {Component} from 'react';

export default class RandomImages extends Component {
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
