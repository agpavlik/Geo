import React from "react";
import ReactDOM from "react-dom";

import { CSSTransition } from "react-transition-group";
// Animation library https://reactcommunity.org/react-transition-group/

import "./SideDrawer.css";

// Navbar for a mobile screen
const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;

// React Portals provide a way to render children into a DOM node that exists outside of the DOM hierarchy of the parent component.
// Portals in React allows us to project or render a React component in a different place than it normally would be rendered.
// Normally the side drawer would be rendered as part of our main navigation and therefore wherever this main navigation is rendered.
// Now with a portal, we can mark a new place in public index.html where we want to render our portal content.
// We add a new div 'drawer hook' in front of root div. This is where we render side drawer.

// This method takes two arguments:
// The first argument is the JSX element that you want to render.
// The second argument is a reference to the DOM node where you want to render the element.

// We tell React that it should render this content here. For that, we store jsx content in a new constant,
