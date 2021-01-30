import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './left-sidebar.css'

const LeftSideBar = ({
    bgColor, 
    color, 
    width, 
    height,  
    margin, 
    padding, 
    position, 
    top, 
    left, 
    display, 
    flexDirection, ...props}) => {
    return (
        <Fragment>
            <div 
                className="im-left-sidebar" 
                style={{
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

LeftSideBar.propTypes = {
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
    flexDirection: PropTypes.string
};

LeftSideBar.defaultProps = {
    bgColor: '#fff',
    color: '#000',
    width: 'auto',
    height: '100vh',
    margin: '0 0 0 75px',
    display: 'flex',
    flexDirection: 'column'
};

export default LeftSideBar;
