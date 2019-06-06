import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./ProductItem.css";



export default class ProductItem extends PureComponent {

    static propTypes = {
        fileName: PropTypes.string,
        filePath: PropTypes.string,
        pattern: PropTypes.string
    }

    render() {
        // var fileFullName = `{this.props.filePath}\{this.props.fileName}`;
        return (
          <div className="component-product-result-row">
              <img alt={this.props.pattern} src={this.props.fileName} />
          </div>
        );
    }
}
