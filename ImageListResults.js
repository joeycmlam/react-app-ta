import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import ImageItem from "./ImageItem";
import "./ImageListResults.css";

export default class ImageListResults extends PureComponent {
  static propTypes = {
    imageData: PropTypes.array
  };

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
