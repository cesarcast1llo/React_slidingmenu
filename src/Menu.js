import React, { Component } from "react";
import "./Menu.css";
 
class Menu extends Component {
  render() {
    var visibility = "hide";
    // class^^
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
//either hide or show depending on menuVisibility prop, whose value
//is specified by visible state property in MenuContainer
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
    {/* when clicked(mousedown), "visibility" is activated */}
        <h2><a href="#">Home</a></h2>
        <h2><a href="#">About</a></h2>
        <h2><a href="#">Contact</a></h2>
        <h2><a href="#">Search</a></h2>
      </div>
    );
  }
}
 
export default Menu;