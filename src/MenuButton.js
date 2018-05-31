import React, { Component } from "react";
import './MenuButton.css';
 
class MenuButton extends Component {
  render() {
    return (
      <button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>
    //id is roundButton, onMouseDown=when clicked, prop is activated
    );
  }
}
 
export default MenuButton;