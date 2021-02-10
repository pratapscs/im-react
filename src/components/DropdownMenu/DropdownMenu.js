import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { Menu, MenuItem } from '@material-ui/core';


const DropdownMenu = ({
    id,
    classes,
    onClick,
    onClose,
    autoFocus,
    children,
    disableAutoFocusItem,
    MenuListProps,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    variant,
    dropdownMenuitems,
    open,
    ...others
}) => {
    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    const handleClickMenuItem = (value) => {
        alert(value);
    }
    return (
        <Fragment>
            {/* <IMButton onClick={handleClick}>Open!</IMButton> */}
            <Menu
                id={id}
                //anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={onClose}
                {...others}
            >
                {
                    dropdownMenuitems.map(item => {
                        return (
                            <MenuItem key={item.id} onClick={() => { handleClickMenuItem(item.value); onClose() }}>{item.label}</MenuItem>
                        );
                    })
                }
            </Menu>
        </Fragment>
    );
}

DropdownMenu.propTypes = {
    id: PropTypes.string,
    autoFocus: PropTypes.bool,
    children: PropTypes.node,
    open: PropTypes.bool,
    disableAutoFocusItem: PropTypes.bool,
    MenuListProps: PropTypes.object,
    classes: PropTypes.object,
    anchorEl: PropTypes.func,
    onClose: PropTypes.func,
    onClick: PropTypes.func,
    onEnter: PropTypes.func,
    onEntered: PropTypes.func,
    onEntering: PropTypes.func,
    onExit: PropTypes.func,
    onExited: PropTypes.func,
    onExiting: PropTypes.func,
    variant: PropTypes.string,
    dropdownMenuitems: PropTypes.array,
};

DropdownMenu.defaultProps = {
    open: false,
    MenuListProps: {},
    classes: {},
    disableAutoFocusItem: false,
    variant: "selectedMenu",
    dropdownMenuitems: [
        {
            id: "0",
            label: "New Chat",
            value: "Menu Item - 1"
        },
        {
            id: "1",
            label: "Create a Channel",
            value: "Menu Item - 2"
        },
        {
            id: "2",
            label: "Join a Channel",
            value: "Menu Item - 3"
        }
    ],
};

export default DropdownMenu;
