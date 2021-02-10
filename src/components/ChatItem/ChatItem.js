import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import { Avatar } from "@material-ui/core";
import PropTypes from "prop-types";

const ChatItem = ({
    avatar,
    message,
    float,
    color,
    height,
    width,
    bgColor,
    fontFamily,
    fontWeight,
    fontSize
}) => {
    return (
        <Fragment>
            <Box
                display="flex"
                bgcolor={"transparent"}
                fontFamily={fontFamily}
                fontWeight={fontWeight}
                fontSize={fontSize}
                height={height}
                width={width}
                color={color}
            >
                <Box
                    display="flex"
                    flexDirection="row"
                >
                    <Box p={1}>{avatar}</Box>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="row"
                >
                    <Box
                        p={1}
                        bgcolor={float === "right" ? "#e3f4e9" : "#f0f8ff"}
                        border="1px solid white"
                        borderRadius="10px"
                    >
                        {message}
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
};

ChatItem.defaultProps = {
    bgColor: "#F0F8FF",
    height: "auto",
    width: "auto",
    avatar: <Avatar>A</Avatar>,
    message: "Hello Mr. Atif, Welcome to ZKTeco Biometrics India Pvt Ltd.",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "small",
    float: "left",
    color: "#000"
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
    height: PropTypes.string,
    width: PropTypes.string,
};

export default ChatItem;