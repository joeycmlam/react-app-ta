import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ConceptItem from "./ConceptItem";

export default class ConeceptListResult extends PureComponent {

    static propTypes = {
        // imageData: PropTypes.array
        imageData: []
    }

    render() {
        return (
            <div>
                {this.props.imageData.map(imageData => (
                    <ConceptItem
                        id={imageData.id}
                        url={imageData.url}
                    />
                )) }
            </div>
        )
    }

}
