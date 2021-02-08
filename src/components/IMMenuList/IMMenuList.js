import React, { Fragment } from "react";
import { IMAvatar } from '../IMAvatar';
import { Link } from "react-router-dom";


const IMMenuList = ({
    menuList
}) => {
    
    const menus = menuList.map((data) => (
        <Link to={data.path} key={data.path}>
            <IMAvatar>{data.menu}</IMAvatar>
        </Link>
    ));
    
    return(
        <Fragment>
            {menus}
        </Fragment>
    );
}

export default IMMenuList;