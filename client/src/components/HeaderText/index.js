// header text component
import React from "react";
import "./index.css";

function Header(props) {
    return (
        <div className="header-text">
            {props.children}
        </div>
    );
}

export default Header;