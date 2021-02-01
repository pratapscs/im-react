import React, { Fragment, useState } from 'react';
import PropTypes from "prop-types";
import { Box } from '@material-ui/core';
import Textarea from 'im_react_service/lib/Textarea';
import IconButton from "@material-ui/core/IconButton";
import IMIcon from 'im_react_service/lib/IMIcon';

const ChatTextBox = ({color, onClick}) => {
    const [message, setMessage] = useState("")
    return (
        <Fragment>
            <Box style={{margin:"0 16px"}} width="100%">
                <Textarea width="100%" placeholder="Type a new message"  onChange = {(e) => setMessage(e.target.value)}/>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center', position: 'relative', right: '45px' }}>
                <IconButton aria-label="send">
                    <IMIcon icon="send" color={color}  onClick={onClick(message)}/>
                </IconButton>
            </Box>
        </Fragment>
    );
}
ChatTextBox.propTypes = {
    color: PropTypes.string,
    onClick:PropTypes.func,
};

ChatTextBox.defaultProps = {
    color: "#304669",
};

export default ChatTextBox;
