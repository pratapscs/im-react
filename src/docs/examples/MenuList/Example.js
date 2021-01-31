import React, { Fragment } from 'react';
import MenuList from 'im-react/MenuList';

export default function MenuListExample() {
    const leftSideBarMenuListClicked = (data) => {
        alert(data.name)
    };
    const contact = {
        name:"vinay",
        message: "Hi pratap",
        profile: "",
        time: "10:10"
    }
    return (
        <Fragment>
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" title="ZKTeco + Team" desc="Membership Application" time="16:00" contact = {contact}/>
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" title="Miracy" desc="Miracy invited Zhong Wenkang to join the.." time="15:35" />
        </Fragment>
    );
}
