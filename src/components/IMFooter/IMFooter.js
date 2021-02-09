import React from 'react';
import PropTypes from 'prop-types';
import './im-footer.css';

function IMFooter({ bgColor, color, width, height, margin, padding, position, bottom, borderTop, ...props }) {
    return (
        <div
            className="im-footer"
            style={{
                background: bgColor,
                position: position,
                bottom: bottom,
                color: color,
                width: width,
                height: height,
                lineHeight: height,
                margin: margin,
                padding: padding,
                borderTop: borderTop
            }}>
            {props.children}
        </div>
    )
}

IMFooter.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    position: PropTypes.string,
    bottom: PropTypes.string,
    borderTop: PropTypes.string,
}

IMFooter.defaultProps = {
    bgColor: '#FFFFFF',
    color: '#707070',
    borderTop: "1px solid #ddd",
    height: '8.33%'
};

export default IMFooter;