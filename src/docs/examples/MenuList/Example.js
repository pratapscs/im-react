import React, { Fragment } from 'react';
import MenuList from 'im-react/MenuList';

export default function MenuListExample() {
    const leftSideBarMenuListClicked = () => {
        alert("Clicked!")
    };
    return (
        <Fragment>
            <MenuList onClick={leftSideBarMenuListClicked} width="25%" bgColor="#fff"  title="ZKTeco + Team" desc="Membership Application" time="16:00" />
        </Fragment>
    );
}
