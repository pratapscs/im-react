import React from 'react';

const IMMainContainer = ({
    children
}) => {
    const style = {
        background: "white",
        color: "black"
    }
    return(
        <div style = {style}>
            {children}
        </div>
    );
}
export default IMMainContainer;
