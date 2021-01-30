import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RightMainPage = ({
    bgColor, 
    color, 
    width, 
    height, 
    border,
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
            <div style={{
                    background:bgColor, 
                    color:color, 
                    width:width, 
                    height:height, 
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

RightMainPage.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    border: PropTypes.string,
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

RightMainPage.defaultProps = {
    bgColor: '#fff',
    color: '#000000',
    width: '100%',
    height: '100vh',
};

export default RightMainPage;
