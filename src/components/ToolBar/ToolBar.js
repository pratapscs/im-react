import React from 'react';
import PropTypes from 'prop-types';

const ToolBar = ({bgColor, color, width, height, margin, padding, position, top, left, ...props}) => {
    return (
        <div 
            style={{
                background:bgColor, 
                color:color, 
                width:width, 
                height:height, 
                margin:margin, 
                padding:padding,
                position:position,
                top:top,
                left:left
            }}>
            {props.children}                
        </div>
    );
}

ToolBar.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    position: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string
};

ToolBar.defaultProps = {
    bgColor: '#304669',
    color: '#fff',
    width: '75px',
    height: '100vh',
    margin: '0',
    padding: '0',
    position: 'absolute',
    top: '0',
    left: '0'
};

export default ToolBar;
