import React, { Fragment } from 'react';
import MenuList from 'im-react/MenuList';
 
export default function MenuListExample() {
    const leftSideBarMenuListClicked = (data) => {
        alert(JSON.stringify(data))
    };
    const contact = {
        firstName:"vinay",
        message: "Hi pratap",
        profile: "",
        startTime: "10:10"
    }
    const channel = {
        channelName:"channel",
        message: "Hi Vinay",
        profile: "",
        startTime: "10:10"
    }
    return (
        <Fragment>
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" contact = {contact}/>
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" contact = {channel} />
        </Fragment>
    );
}