import React from 'react';
import PropTypes from 'prop-types';
import './chat-footer.css';

function ChatFooter({bgColor, color, width, height, margin, padding, ...props}) {
    return (
        <div className="im-chat-footer" style={{background:bgColor, color:color, width:width, height:height, lineHeight:height, margin:margin, padding:padding}}>
            {props.children}          
        </div>
    )
}
ChatFooter.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,   
    margin: PropTypes.string,
    padding: PropTypes.string,

}
ChatFooter.defaultProps = {
    bgColor: '#FFFFFF',
    color:'#707070',
    width: 'auto',
    padding:'0 16px',
    height: '75px',   

};
export default ChatFooter;