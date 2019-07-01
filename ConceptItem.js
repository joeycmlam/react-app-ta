import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./ProductItem.css";



export default class ConceptItem extends PureComponent {

    static propTypes = {
        id: PropTypes.string,
        concepts: PropTypes.arrayOf(PropTypes.string),
        url: PropTypes.string
    }

    render() {
        return (
            <div className="component-product-result-row">
                <img alt={this.props.id} src={this.props.url} />
            </div>
        );
    }
}
