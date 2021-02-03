import React from "react";

const IMMainContainer = ({
    children
}) => {
    const style = {
        background: "white",
        color: "black",
        width:"100%",
        height:"100%"
    }
    return(
        <div style = {style}>
            {children}
        </div>
    );
}

export default IMMainContainer;