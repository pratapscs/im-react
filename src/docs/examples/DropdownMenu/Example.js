import React, { Fragment } from 'react';
import DropdownMenu from 'im-react/DropdownMenu';
import IMButton from 'im-react/IMButton';
 
export default function DropdownMenuExample() {
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
            <IMButton size="small" bgColor="red" color="white" onClick={handleClick}>Click to open DropdownMenu</IMButton>
            <DropdownMenu dropdownMenuitems={data} open={Boolean(anchorEl)} onClose={handleClose} />
        </Fragment>
  );
}