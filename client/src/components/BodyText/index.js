// body text component
import React from "react";
import "./index.css";

function BodyText(props) {
    return (
        <div className="body-text">
            {props.children}
        </div>
    );
}

export default BodyText;