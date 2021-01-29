import React, { Fragment } from 'react';
import MenuList from 'im-react/MenuList';

export default function MenuListExample() {
    const leftSideBarMenuListClicked = () => {
        alert("Clicked!")
    };
    return (
        <Fragment>
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" title="ZKTeco + Team" desc="Membership Application" time="16:00" />
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" title="Miracy" desc="Miracy invited Zhong Wenkang to join the.." time="15:35" />
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" title="Lucy" desc="Lucy invited Zhong Wenkang to join the..." time="4:00" />
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" title="Inform News" desc="Your leave application has beed..." time="Yesterday" />
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" title="Target Assistant" desc="Linda has assigned you a goal." time="September 9th" />
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" title="Visitor News" desc="The visitor submitted a face ..." time="September 8th" />
        </Fragment>
    );
}
