import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const LeftSideBar = ({
    id,
    bgColor, 
    color, 
    width, 
    height, 
    border,
    borderRight,
    margin, 
    marginLeft, 
    marginRight, 
    padding,
    paddingLeft, 
    paddingRight,
    position, 
    top, 
    left, ...props}) => {
    return (
        <Fragment>
            <div 
                className="left-sidebar"
                style={{
                    background:bgColor, 
                    color:color, 
                    width:width, 
                    height:height, 
                    border:border,
                    borderRight:borderRight,
                    margin:margin,
                    marginLeft:marginLeft, 
                    marginRight:marginRight, 
                    padding:padding,
                    paddingLeft:paddingLeft, 
                    paddingRight:paddingRight,
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
    borderRight: PropTypes.string,
    margin: PropTypes.string,
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string,
    padding: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingRight: PropTypes.string,
    position: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string
};

LeftSideBar.defaultProps = {
    bgColor: '',
    color: '#000000',
    height: '100%',
    borderRight: '1px solid #ddd'
};

export default LeftSideBar;
