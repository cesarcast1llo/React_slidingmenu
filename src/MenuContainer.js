import React, { Component } from "react";
import Aux from './hoc/Aux';
import MenuButton from './MenuButton';
import Menu from './Menu'; 


class MenuContainer extends Component {
    constructor(props, context) {
      super(props, context);
     
      this.state = {
        visible: false
    //storing var-visible in state object
      };
      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
    //responsible for toggling if visible is true or false
}
    handleMouseDown(e) {
        this.toggleMenu();
    //method is called, togglesMenu
    
        console.log("clicked");
        e.stopPropagation();
    }
     
    toggleMenu() {
      this.setState({
          visible: !this.state.visible
      });
    }
    // *****************explain further **********************
    render() {
        return (
            <Aux>
          <MenuButton handleMouseDown={this.handleMouseDown}/>
    {/*when menu button (roundButton) is clicked, activates handleMouseDown event handler */}
          <Menu handleMouseDown={this.handleMouseDown}
                menuVisibility={this.state.visible}/>
    {/* handleMouseDown method is called, visible: either true or false */}
            <div>
                <div>
                <ul>
                    <li>Click</li>
                    <li>on</li>
                    <li>the</li>
                    <li>button</li>
                </ul>
                </div>
            </div>
            </Aux>
        );
    }
}
 
export default MenuContainer;
