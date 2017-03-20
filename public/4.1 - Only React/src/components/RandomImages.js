import React, {Component} from 'react';
import $ from 'jquery';

export default class RandomImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: []
    };
    this.randomImages = this.randomImages.bind(this);
  }

  randomImages() {
    this.setState({loading: "loading..."});
    const imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
    // dispatch({type: "IMGUR_LOADING"});
    $.getJSON(imgurAPI).done((data) => {
      // dispatch({type: 'SHOW_IMGUR_IMAGES', data: data.data})
      this.setState({data: data.data, loading: "loaded"})
    })
  }

  render() {
    function ImageList(props) {
      return (
        <div>
          {props.images.map((image) => (<img src={image.link} style={{height: "200px"}} key={image.id} role="presentation"/>))}
        </div>
      )
    }

    return (
      <div>
        <button onClick={this.randomImages}>Random Images ></button>
        <br/>
        CountStatus: <span style={{color: "blue"}}>{this.state.loading}</span>
        <ImageList images={this.state.data}/>
      </div>
    )
  }
}
