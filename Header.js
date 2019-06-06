import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="resource/icon.PNG"
          width="32"
          height="32"
          alt=""
        />
        Top Asia Awards Search
      </header>
    );
  }
}
