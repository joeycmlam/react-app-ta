import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProrductItem";

export default class ProductListResult extends PureComponent {

    static propTypes = {
        imageData: PropTypes.array
    }

    render() {
        return (
            <div>
                {this.props.imageData.map(imageData => (
                    <ProductItem
                        fileName={imageData.fileName}
                        filePath={imageData.filePath}
                        pattern={imageData.pattern}
                    />
                )) }
            </div>
        )
    }
}
