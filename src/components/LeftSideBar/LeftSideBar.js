import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './left-sidebar.css'

const LeftSideBar = ({
    bgColor, 
    color, 
    width, 
    height, 
    border,
    margin,  
    padding, 
    position, 
    top, 
    left, ...props}) => {
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
                    left:left
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
    border: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    position: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string
};

LeftSideBar.defaultProps = {
    bgColor: '#fff',
    color: '#000000',
    width: '325px',
    height: '100vh',
    margin: '0 0 0 75px',
    border: '1px solid #ddd',
    position: 'absolute',
    top: '0',
    left: '0',
    title: 'ZKTeco + Team', 
    desc: 'Membership Application', 
    time: '16:00'
};

export default LeftSideBar;
