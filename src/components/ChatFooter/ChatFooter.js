import React from 'react';
import PropTypes from 'prop-types';
import './chat-footer.css';

function ChatFooter({bgColor, color, width, height, margin, padding, position, bottom, ...props}) {
    return (
        <div className="im-chat-footer" style={{background:bgColor, position:position, bottom:bottom, color:color, width:width, height:height, lineHeight:height, margin:margin, padding:padding}}>
            {props.children}          
        </div>
    )
};

ChatFooter.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,   
    margin: PropTypes.string,
    padding: PropTypes.string,
    position: PropTypes.string,
    bottom: PropTypes.string,
};

ChatFooter.defaultProps = {
    bgColor: '#FFFFFF',
    color:'#707070',
    width: '100%',
    padding:'0 16px',
    height: '75px',   
    position: 'fixed',   
    bottom: '0px',   

};

export default ChatFooter;