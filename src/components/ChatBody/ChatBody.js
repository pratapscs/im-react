import React from 'react';
import PropTypes from 'prop-types';
import './chat-body.css';

function ChatBody({bgColor, color, width, height, margin, padding, ...props}) {
    return (
        <div className="im-chat-body" style={{background:bgColor, color:color, width:width, height:height, margin:margin, padding:padding}}>
            {props.children}            
        </div>
    )
}
ChatBody.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,   
    margin: PropTypes.string,
    padding: PropTypes.string,

}
ChatBody.defaultProps = {
    bgColor: '#f5f6fa',
    color:'#313c6a',
    width: '100%',
    padding:'16px',
    height: '100%',   

};

export default ChatBody;
