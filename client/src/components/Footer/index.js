// footer component
import React from "react";
import "./index.css";

function Footer(props) {
    return (
        <div className="footer">
            <h1>Footer</h1>
            <hr className="my-4"></hr>
            {props.children}
        </div>
    )
}

export default Footer;