import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import ImageItem from "./ImageItem";
import "./ImageListResults.css";

export default class ImageListResults extends PureComponent {
  static propTypes = {
    imageData: PropTypes.array
  };


  getModelList() {
    fetch('http://ec2-34-221-74-184.us-west-2.compute.amazonaws.com/get_concepts')
        .then(res => res.json())
        .then((data) => {
          this.setState({imageData: data})}).catch(console.log)
  }

  render() {
    return (
      <div className="component-image-results">
        {this.props.imageData.map(imageData => (
          <ImageItem
            key={imageData.title}
            symbol={imageData.symbol}
            title={imageData.title}
          />
        ))}
      </div>
    );
  }
}
