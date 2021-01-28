import React from 'react';
import PropTypes from 'prop-types';
import './chat-header.css';

function ChatHeader({ bgColor, color, width, height, margin, padding, ...props }) {
    return (
        <div className="im-chat-header" style={{ background: bgColor, color: color, width: width, height: height, margin: margin, padding: padding }}>
            {props.children}
        </div>
    );
}

ChatHeader.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string
}

ChatHeader.defaultProps = {
    bgColor: '#FFFFFF',
    color: '#707070',
    width: '100%',
    padding: '0 16px',
    height: '75px'
};

export default ChatHeader;
