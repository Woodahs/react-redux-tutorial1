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

    return (
      <div>
        <button onClick={this.props.onRandomImages}>Random Images ></button>
        <br/>
        CountStatus: <span style={{color: "blue"}}>{this.props.images.loading}</span>
        <ImageList images={this.props.images.data}/>
      </div>
    )
  }
}
