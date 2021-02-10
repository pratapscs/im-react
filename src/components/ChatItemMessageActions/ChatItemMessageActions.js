import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Avatar, Box } from "@material-ui/core";
import IMIconButton from '../IMIconButton';
import DropdownMenu from "../DropdownMenu";

const ChatItemMessageActions = ({
    avatar,
    message,
    float,
    height,
    width,
    color,
    bgColor,
    fontFamily,
    fontWeight,
    fontSize,
}) => {
    const [isShown, setIsShown] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const data = [
        {
            id: "0",
            label: "Star",
            value: "Value - 1"
        },
        {
            id: "1",
            label: "Forward",
            value: "Value - 2"
        },
        {
            id: "2",
            label: "Copy",
            value: "Value - 3"
        },
        {
            id: "3",
            label: "Edit",
            value: "Value - 4"
        },
        {
            id: "4",
            label: "Delete",
            value: "Value - 5"
        }
    ]
    return (
        <Fragment>
            <Box
                display="flex"
                bgcolor={"transparent"}
                // alignItems="center"
                fontFamily={fontFamily}
                fontWeight={fontWeight}
                fontSize={fontSize}
                height={height}
                width={width}
                color={color}
                onMouseEnter={() => setIsShown(true)} 
                onMouseLeave={() => setIsShown(false)}
            >
                <Box
                    display="flex"
                    //alignItems="center"
                    //flexGrow={1}
                    flexDirection="row"
                >
                    <Box p={1}>{avatar}</Box>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    //flexGrow={1}
                    flexDirection="row"
                >
                    <Box
                        p={1}
                        bgcolor= {float === "right" ? "#e3f4e9" : "#f0f8ff"}
                        border="1px solid white"
                        borderRadius="10px"
                    >
                        {message}
                    </Box>
                </Box>
                <Box
                    display="flex"
                    //alignItems="center"
                    //flexGrow={1}
                    flexDirection="row"
                >
                    <Box style={{visibility : isShown ? "visible" : "hidden", minWidth:'150px', }}>
                        <IMIconButton icon="reply" size="2" />   
                        <IMIconButton icon="MoreHoriz" size="2" onClick={handleClick} />
                        <DropdownMenu dropdownMenuitems={data} open={Boolean(anchorEl)} onClose={handleClose} />
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
};

ChatItemMessageActions.defaultProps = {
    bgColor: "red",
    height: "auto",
    width: "auto",
    avatar: <Avatar>A</Avatar>,
    message: "Hello Mr. Khan, Welcome to ZKTeco Biometrics India Pvt Ltd.",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "small",
    color: "#000",
    textColor: "#304669",
    name: "pratap@zkteco.in",
    datetime: "01-02-2020"
};

ChatItemMessageActions.propTypes = {
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
    datetime: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
};

export default ChatItemMessageActions;