import React, { Fragment } from 'react';
import MenuList from 'im-react/MenuList';

export default function MenuListExample() {
    const leftSideBarMenuListClicked = (event) => {
        const id = event.target.value;
        alert("Clicked!")
    };
    return (
        <Fragment>
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff"  id="1" title="ZKTeco + Team" desc="Membership Application" time="16:00" />
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" id="2" title="Miracy" desc="Miracy invited Zhong Wenkang to join the.." time="15:35" />
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" id="3" title="Lucy" desc="Lucy invited Zhong Wenkang to join the..." time="4:00" />
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" id="4" title="Inform News" desc="Your leave application has beed..." time="Yesterday" />
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" id="5" title="Target Assistant" desc="Linda has assigned you a goal." time="September 9th" />
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff" id="6" title="Visitor News" desc="The visitor submitted a face ..." time="September 8th" />
        </Fragment>
    );
}
