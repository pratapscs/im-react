import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import './im-card.css'


function IMcard({width,height,bgColor,color, padding, margin, ...props }) {
    return (
        <Fragment>
            <Card className="im-card" style={{background:bgColor, color:color, width:width, height:height, padding:padding, margin:margin}}>
                {props.children}
            </Card>
        </Fragment>
    )
}
IMcard.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
}; 
IMcard.defaultProps = {
    bgColor: '#FFF',
    color: '#333',
    width: '100%',
 };


export default IMcard
