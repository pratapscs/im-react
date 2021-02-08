import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ToolBar = ({bgColor, color, width, height, margin, padding, position, top, left, display, flexDirection, ...props}) => {
    return (
        <Fragment>
            <div style={{
                    background:bgColor, 
                    color:color, 
                    width:width, 
                    height:height, 
                    margin:margin, 
                    padding:padding,
                    position:position,
                    top:top,
                    left:left,
                    display:display,
                    flexDirection:flexDirection
                    }}>
                {props.children}                
            </div>
        </Fragment>
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
    left: PropTypes.string,
    display: PropTypes.string,
    flexDirection: PropTypes.string,
};

ToolBar.defaultProps = {
    bgColor: '#304669',
    color: '#fff',
    width: '75px',
    height: '100vh',
    margin: '0',
    padding: '0',
    display:'flex',
    flexDirection:'column',
};

export default ToolBar;
