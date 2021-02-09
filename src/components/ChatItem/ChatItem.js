import React from "react";
import Box from "@material-ui/core/Box";
import { Avatar } from "@material-ui/core";
import PropTypes from "prop-types";

const ChatItem = ({
    avatar,
    message,
    float,
    color,
    bgColor,
    fontFamily,
    fontWeight,
    fontSize
}) => {
    return (
        <div>
            <Box
                display="flex"
                bgcolor={"transparent"}
                alignItems="center"
                fontFamily={fontFamily}
                fontWeight={fontWeight}
                fontSize={fontSize}
                color={color}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    flexGrow={1}
                    flexDirection = "row"
                >
                    <Box p={1}>{avatar}</Box>
                    <Box
                        p={1}
                        bgcolor= {float === "right" ? "#e3f4e9" : "#f0f8ff"}
                        border="1px solid white"
                        borderRadius="10px"
                    >
                        {message}
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

ChatItem.defaultProps = {
    bgColor: "red",
    height: "75px",
    avatar: <Avatar>V</Avatar>,
    message: "hi Vinay, welcome to zkteco",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "small",
    color: "#000",
    textColor: "#304669",
    name: "pratap@zkteco.in",
    datetime: "01-02-2020"
};


ChatItem.propTypes = {
    avatar: PropTypes.element.isRequired,
    message: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.string,
    float: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    name: PropTypes.string,
    datetime: PropTypes.string
};

export default ChatItem;