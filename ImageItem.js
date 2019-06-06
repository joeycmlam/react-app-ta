import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./ImageItem.css";

export default class ImageItem extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
        symbol: PropTypes.string
    };

    render() {
        const codePointHex = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return (
            <div
                className="component-image-result-row"
                data-clipboard-text={this.props.symbol}
            >
                <img alt={this.props.title} src={src} />
                <span className="title">{this.props.title}</span>
            </div>
        );
    }
}
