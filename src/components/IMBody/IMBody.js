import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './im-body.css';

function IMBody({ bgColor, color, width, height, margin, padding, ...props }) {
    return (
        <Fragment>
            <div
                className="im-body"
                style={{
                    background: bgColor,
                    color: color,
                    width: width,
                    height: height,
                    margin: margin,
                    padding: padding
                }}>
                {props.children}
            </div>
        </Fragment>
    )
}

IMBody.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string
}

IMBody.defaultProps = {
    bgColor: '#f5f6fa',
    color: '#313c6a',
    height: '91.66%'
};

export default IMBody;
