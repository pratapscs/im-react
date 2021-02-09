import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { Box } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import IMIcon from '../IMIcon';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const ChatTextBox = ({color, onClick}) => {
   
    return (
        <Fragment>
            <Box style={{position:'relative'}}>
                <Box style={{display:'flex'}}>
                    <TextareaAutosize 
                        style={{
                            width:'97.5%', 
                            margin:'1%', 
                            resize:'none', 
                            paddingRight:'15%', 
                            outline:'none', 
                            border:'1px solid #ddd'
                        }}
                        rowsMin={3}
                        rowsMax={3}
                        fullWidth
                        aria-label="maximum height"
                        placeholder="Maximum 4 rows"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </Box>
                <Box 
                    style={{
                        position:'absolute',
                        right:'2%',
                        top:'21%'
                    }}>
                    <IconButton aria-label="send" size="small">
                        <IMIcon icon="send" size="30" color={color} />
                    </IconButton>
                </Box>
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
